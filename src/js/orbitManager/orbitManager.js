/* */

import * as glm from '@app/js/lib/external/gl-matrix.js';
import { ColorSchemeFactory as ColorScheme } from '@app/js/colorManager/color-scheme-factory.js';
import { satSet } from '@app/js/satSet/satSet.js';
import { settingsManager } from '@app/js/settingsManager/settingsManager.js';
import { timeManager } from '@app/js/timeManager/timeManager.js';
let M = window.M;

var NUM_SEGS = 255;

var glBuffers = [];
var inProgress = [];

var orbitManager = {};

var pathShader;

var selectOrbitBuf;
var hoverOrbitBuf;

orbitManager.emptyOrbitBuffer = new Float32Array((NUM_SEGS + 1) * 4);

var currentHoverId = -1;
var currentSelectId = -1;
var currentInView = [];

var orbitMvMat = glm.mat4.create();

// Webpack will place this IN ./js not in ./js/webworker like in the source code
var orbitWorker = new Worker(settingsManager.installDirectory + 'js/orbitCruncher.js');

var initialized = false;

orbitManager.shader = {
  frag: `
    precision mediump float;

    varying vec4 vColor;
    varying float vAlpha;

    void main(void) {
    gl_FragColor = vec4(vColor[0],vColor[1],vColor[2], vColor[3] * vAlpha);
    }
    `,
  vert: `
    attribute vec4 aPos;

    uniform mat4 uCamMatrix;
    uniform mat4 uMvMatrix;
    uniform mat4 uPMatrix;
    uniform vec4 uColor;

    varying vec4 vColor;
    varying float vAlpha;

    void main(void) {
        vec4 position = uPMatrix * uCamMatrix *  uMvMatrix * vec4(aPos[0],aPos[1],aPos[2], 1.0);
        gl_Position = position;
        vColor = uColor;
        vAlpha = aPos[3];
    }
    `,
};

var gl, cameraManager, groupsManager;
orbitManager.init = function (glRef, cameraManagerRef, groupsManagerRef) {
  gl = glRef;
  cameraManager = cameraManagerRef;
  groupsManager = groupsManagerRef;

  var vs = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vs, orbitManager.shader.vert);
  gl.compileShader(vs);

  var fs = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fs, orbitManager.shader.frag);
  gl.compileShader(fs);

  pathShader = gl.createProgram();
  gl.attachShader(pathShader, vs);
  gl.attachShader(pathShader, fs);
  gl.linkProgram(pathShader);

  pathShader.aPos = gl.getAttribLocation(pathShader, 'aPos');
  pathShader.uMvMatrix = gl.getUniformLocation(pathShader, 'uMvMatrix');
  pathShader.uCamMatrix = gl.getUniformLocation(pathShader, 'uCamMatrix');
  pathShader.uPMatrix = gl.getUniformLocation(pathShader, 'uPMatrix');
  pathShader.uColor = gl.getUniformLocation(pathShader, 'uColor');

  selectOrbitBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, selectOrbitBuf);
  gl.bufferData(gl.ARRAY_BUFFER, orbitManager.emptyOrbitBuffer, gl.DYNAMIC_DRAW);

  hoverOrbitBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, hoverOrbitBuf);
  gl.bufferData(gl.ARRAY_BUFFER, orbitManager.emptyOrbitBuffer, gl.DYNAMIC_DRAW);

  for (var i = 0; i < satSet.missileSats; i++) {
    glBuffers.push(allocateBuffer());
  }
  orbitWorker.postMessage({
    isInit: true,
    orbitFadeFactor: settingsManager.orbitFadeFactor,
    satData: JSON.stringify(satSet.satData),
    numSegs: NUM_SEGS,
  });
  initialized = true;

  orbitManager.shader = pathShader;
};

orbitManager.updateOrbitBuffer = function (satId, force, TLE1, TLE2, missile, latList, lonList, altList) {
  if (!inProgress[satId] && !satSet.getSat(satId).static) {
    if (force) {
      orbitWorker.postMessage({
        isInit: false,
        isUpdate: true,
        satId: satId,
        realTime: timeManager.propRealTime,
        offset: timeManager.propOffset,
        rate: timeManager.propRate,
        TLE1: TLE1,
        TLE2: TLE2,
      });
    } else if (missile) {
      orbitWorker.postMessage({
        isInit: false,
        isUpdate: true,
        missile: true,
        satId: satId,
        latList: latList,
        lonList: lonList,
        altList: altList,
      });
    } else {
      orbitWorker.postMessage({
        isInit: false,
        satId: satId,
        realTime: timeManager.propRealTime,
        offset: timeManager.propOffset,
        rate: timeManager.propRate,
      });
      inProgress[satId] = true;
    }
  }
};

orbitWorker.onmessage = function (m) {
  var satId = m.data.satId;
  var pointsOut = new Float32Array(m.data.pointsOut);
  gl.bindBuffer(gl.ARRAY_BUFFER, glBuffers[satId]);
  gl.bufferData(gl.ARRAY_BUFFER, pointsOut, gl.DYNAMIC_DRAW);
  inProgress[satId] = false;
};

/* orbitManager.setOrbit = function (satId) {
var sat = satSet.getSat(satId);
glm.mat4.identity(orbitMvMat);
//apply steps in reverse order because matrix multiplication
// (last multiplied in is first applied to vertex)

//step 5. rotate to RAAN
glm.mat4.rotateZ(orbitMvMat, orbitMvMat, sat.raan + Math.PI/2);
//step 4. incline the plane
glm.mat4.rotateY(orbitMvMat, orbitMvMat, -sat.inclination);
//step 3. rotate to argument of periapsis
glm.mat4.rotateZ(orbitMvMat, orbitMvMat, sat.argPe - Math.PI/2);
//step 2. put earth at the focus
glm.mat4.translate(orbitMvMat, orbitMvMat, [sat.semiMajorAxis - sat.apogee - RADIUS_OF_EARTH, 0, 0]);
//step 1. stretch to ellipse
glm.mat4.scale(orbitMvMat, orbitMvMat, [sat.semiMajorAxis, sat.semiMinorAxis, 0]);

};

orbitManager.clearOrbit = function () {
glm.mat4.identity(orbitMvMat);
} */

orbitManager.setSelectOrbit = function (satId) {
  currentSelectId = satId;
  orbitManager.updateOrbitBuffer(satId);
};

orbitManager.clearSelectOrbit = function () {
  currentSelectId = -1;
  gl.bindBuffer(gl.ARRAY_BUFFER, selectOrbitBuf);
  gl.bufferData(gl.ARRAY_BUFFER, orbitManager.emptyOrbitBuffer, gl.DYNAMIC_DRAW);
};

orbitManager.addInViewOrbit = function (satId) {
  for (var i = 0; i < currentInView.length; i++) {
    if (satId === currentInView[i]) return;
  }
  currentInView.push(satId);
  orbitManager.updateOrbitBuffer(satId);
};

orbitManager.removeInViewOrbit = function (satId) {
  var r = null;
  for (var i = 0; i < currentInView.length; i++) {
    if (satId === currentInView[i]) {
      r = i;
    }
  }
  if (r === null) return;
  currentInView.splice(r, 1);
  orbitManager.updateOrbitBuffer(satId);
};

orbitManager.clearInViewOrbit = function () {
  if (currentInView === []) return;
  currentInView = [];
};

orbitManager.setHoverOrbit = function (satId) {
  if (satId === currentHoverId) return;
  currentHoverId = satId;
  orbitManager.updateOrbitBuffer(satId);
};

orbitManager.clearHoverOrbit = function () {
  if (currentHoverId === -1) return;
  currentHoverId = -1;

  gl.bindBuffer(gl.ARRAY_BUFFER, hoverOrbitBuf);
  gl.bufferData(gl.ARRAY_BUFFER, orbitManager.emptyOrbitBuffer, gl.DYNAMIC_DRAW);
};

orbitManager.draw = function (pMatrix, camMatrix, tgtBuffer) {
  // lol what do I do here
  if (!initialized) return;

  gl.bindFramebuffer(gl.FRAMEBUFFER, tgtBuffer);
  gl.useProgram(pathShader);

  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  gl.enable(gl.BLEND);
  if (settingsManager.showOrbitThroughEarth) {
    gl.disable(gl.DEPTH_TEST);
  } else {
    gl.enable(gl.DEPTH_TEST);
  }

  gl.uniformMatrix4fv(pathShader.uMvMatrix, false, orbitMvMat);
  gl.uniformMatrix4fv(pathShader.uCamMatrix, false, camMatrix);
  gl.uniformMatrix4fv(pathShader.uPMatrix, false, pMatrix);

  if (currentSelectId !== -1 && !satSet.getSatExtraOnly(currentSelectId).static) {
    gl.uniform4fv(pathShader.uColor, settingsManager.orbitSelectColor);
    gl.bindBuffer(gl.ARRAY_BUFFER, glBuffers[currentSelectId]);
    gl.vertexAttribPointer(pathShader.aPos, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pathShader.aPos);
    gl.drawArrays(gl.LINE_STRIP, 0, NUM_SEGS + 1);
  }

  if (currentHoverId !== -1 && currentHoverId !== currentSelectId && !satSet.getSatExtraOnly(currentHoverId).static) {
    // avoid z-fighting
    gl.uniform4fv(pathShader.uColor, settingsManager.orbitHoverColor);
    gl.bindBuffer(gl.ARRAY_BUFFER, glBuffers[currentHoverId]);
    gl.vertexAttribPointer(pathShader.aPos, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pathShader.aPos);
    gl.drawArrays(gl.LINE_STRIP, 0, NUM_SEGS + 1);
  }

  if (currentInView.length >= 1) {
    // There might be some z-fighting
    if (cameraManager.cameraType.current == cameraManager.cameraType.planetarium) {
      gl.uniform4fv(pathShader.uColor, settingsManager.orbitPlanetariumColor);
    } else {
      gl.uniform4fv(pathShader.uColor, settingsManager.orbitInViewColor);
    }
    currentInView.forEach(function (id) {
      gl.bindBuffer(gl.ARRAY_BUFFER, glBuffers[id]);
      gl.vertexAttribPointer(pathShader.aPos, 4, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(pathShader.aPos);
      gl.drawArrays(gl.LINE_STRIP, 0, NUM_SEGS + 1);
    });
  }

  if (groupsManager.selectedGroup !== null && !settingsManager.isGroupOverlayDisabled) {
    gl.uniform4fv(pathShader.uColor, settingsManager.orbitGroupColor);
    groupsManager.selectedGroup.forEach(function (id) {
      gl.bindBuffer(gl.ARRAY_BUFFER, glBuffers[id]);
      gl.vertexAttribPointer(pathShader.aPos, 4, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(pathShader.aPos);
      gl.drawArrays(gl.LINE_STRIP, 0, NUM_SEGS + 1);
    });
  }

  gl.disableVertexAttribArray(pathShader.aPos);
  gl.disableVertexAttribArray(pathShader.aColor);

  gl.disable(gl.BLEND);
  gl.enable(gl.DEPTH_TEST);

  // Done drawing
  return true;
};

var allocateBuffer = () => {
  var buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, orbitManager.emptyOrbitBuffer, gl.DYNAMIC_DRAW);
  return buf;
};

// Used to kill old async calls
orbitManager.historyOfSatellitesRunCount = 0;
orbitManager.historyOfSatellitesPlay = () => {
  orbitManager.historyOfSatellitesRunCount++;
  orbitManager.isTimeMachineRunning = true;
  orbitManager.tempTransColor = settingsManager.colors.transparent;
  settingsManager.colors.transparent = [0, 0, 0, 0];
  for (let yy = 0; yy <= 200; yy++) {
    let year = 59 + yy;
    if (year >= 100) year = year - 100;
    setTimeout(
      // eslint-disable-next-line no-loop-func
      function (runCount) {
        if (!orbitManager.isTimeMachineVisible) return;
        // Kill all old async calls if run count updates
        if (runCount !== orbitManager.historyOfSatellitesRunCount) return;
        let yearGroup = groupsManager.createGroup('yearOrLess', year);
        // groupsManager.selectGroupNoOverlay(yearGroup);
        groupsManager.selectGroup(yearGroup, orbitManager);
        yearGroup.updateOrbits(orbitManager, orbitManager);
        satSet.setColorScheme(ColorScheme.group, true); // force color recalc
        if (year >= 59 && year < 100) {
          M.toast({ html: `Time Machine In Year 19${year}!` });
        } else {
          let yearStr = year < 10 ? `0${year}` : `${year}`;
          M.toast({ html: `Time Machine In Year 20${yearStr}!` });
        }

        if (year == parseInt(new Date().getUTCFullYear().toString().slice(2, 4))) {
          setTimeout(function () {
            if (runCount !== orbitManager.historyOfSatellitesRunCount) return;
            if (!orbitManager.isTimeMachineVisible) return;
            settingsManager.colors.transparent = orbitManager.tempTransColor;
            orbitManager.isTimeMachineRunning = false;
            groupsManager.clearSelect();
            satSet.setColorScheme(ColorScheme.default, true); // force color recalc
          }, 10000); // Linger for 10 seconds
        }
      },
      settingsManager.timeMachineDelay * yy,
      orbitManager.historyOfSatellitesRunCount
    );
    if (year == 20) break;
  }
};

let updateOrbitBuffer = (satId, force, TLE1, TLE2, missile, latList, lonList, altList) => orbitManager.updateOrbitBuffer(satId, force, TLE1, TLE2, missile, latList, lonList, altList);

export { orbitManager, updateOrbitBuffer };
