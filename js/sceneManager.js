/*
// /////////////////////////////////////////////////////////////////////////////

Copyright (C) 2016-2020 Theodore Kruczek
Copyright (C) 2020 Heather Kruczek

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

// /////////////////////////////////////////////////////////////////////////////
*/

// This file should contain all of the webgl code for generating non .obj meshes
(function () {
  'use strict';
    let mvMatrixEmpty = mat4.create();
    let nMatrixEmpty = mat3.create();

    let sceneManager = {};

    // Earth
    (function () {
        var earth = {};
        var createClockDOMOnce = false;

        var isPropRateVisible = false;

        var vertPosBuf, vertNormBuf, texCoordBuf, vertIndexBuf; // GPU mem buffers, data and stuff?
        var vertCount;
        var earthNow;
        var mvMatrix;
        var mvMatrixEmpty = mat4.create();
        var nMatrix;
        var nMatrixEmpty = mat3.create();
        earth.earthJ = 0;
        earth.earthEra = 0;
        earth.timeTextStr = '';
        earth.timeTextStrEmpty = '';
        earth.lightDirection = [];
        earth.propRateDOM = $('#propRate-status-box');
        var earthShader;

        earth.pos = [0, 0, 0];

        var texture, nightTexture;

        var texLoaded = false;
        var nightLoaded = false;
        var loaded = false;
        earth.loaded = false;

        function onImageLoaded() {
            if (
                texLoaded &&
                nightLoaded &&
                earth.bumpMap.isReady &&
                earth.specularMap.isReady
            ) {
                loaded = true;
                earth.loaded = true;
            }
        }

        earth.isDayNightToggle = false;

        earth.init = function () {
            // Make Fragment Shader
            let fragShader = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(fragShader, sceneManager.shaders.earth.frag);
            gl.compileShader(fragShader);

            // Make Vertex Shader
            let vertShader = gl.createShader(gl.VERTEX_SHADER);
            gl.shaderSource(vertShader, sceneManager.shaders.earth.vert);
            gl.compileShader(vertShader);

            // Create Program with Two Shaders
            earthShader = gl.createProgram();
            gl.attachShader(earthShader, vertShader);
            gl.attachShader(earthShader, fragShader);
            gl.linkProgram(earthShader);

            // Assign Attributes
            earthShader.aVertexPosition = gl.getAttribLocation(
                earthShader,
                'aVertexPosition'
            );
            earthShader.aTexCoord = gl.getAttribLocation(
                earthShader,
                'aTexCoord'
            );
            earthShader.aVertexNormal = gl.getAttribLocation(
                earthShader,
                'aVertexNormal'
            );
            earthShader.uPMatrix = gl.getUniformLocation(
                earthShader,
                'uPMatrix'
            );
            earthShader.uCamMatrix = gl.getUniformLocation(
                earthShader,
                'uCamMatrix'
            );
            earthShader.uMvMatrix = gl.getUniformLocation(
                earthShader,
                'uMvMatrix'
            );
            earthShader.uNormalMatrix = gl.getUniformLocation(
                earthShader,
                'uNormalMatrix'
            );
            earthShader.uLightDirection = gl.getUniformLocation(
                earthShader,
                'uLightDirection'
            );
            earthShader.uAmbientLightColor = gl.getUniformLocation(
                earthShader,
                'uAmbientLightColor'
            );
            earthShader.uDirectionalLightColor = gl.getUniformLocation(
                earthShader,
                'uDirectionalLightColor'
            );
            earthShader.uSampler = gl.getUniformLocation(
                earthShader,
                'uSampler'
            );
            earthShader.uNightSampler = gl.getUniformLocation(
                earthShader,
                'uNightSampler'
            );
            earthShader.uBumpMap = gl.getUniformLocation(
                earthShader,
                'uBumpMap'
            );
            earthShader.uSpecMap = gl.getUniformLocation(
                earthShader,
                'uSpecMap'
            );

            // Day Color Texture
            {
                texture = gl.createTexture();
                var img = new Image();
                img.onload = function () {
                    settingsManager.loadStr('painting');
                    gl.bindTexture(gl.TEXTURE_2D, texture);
                    gl.texImage2D(
                        gl.TEXTURE_2D,
                        0,
                        gl.RGBA,
                        gl.RGBA,
                        gl.UNSIGNED_BYTE,
                        img
                    );
                    gl.texParameteri(
                        gl.TEXTURE_2D,
                        gl.TEXTURE_MAG_FILTER,
                        gl.LINEAR
                    );
                    gl.texParameteri(
                        gl.TEXTURE_2D,
                        gl.TEXTURE_MIN_FILTER,
                        gl.LINEAR
                    );
                    gl.texParameteri(
                        gl.TEXTURE_2D,
                        gl.TEXTURE_WRAP_S,
                        gl.REPEAT
                    );
                    // console.log('earth.js loaded texture');
                    texLoaded = true;
                    onImageLoaded();
                };
                img.src =
                    settingsManager.installDirectory +
                    'textures/earthmap512.jpg';

                earth.loadHiRes = () => {
                  var imgHiRes = new Image();
                  imgHiRes.src =
                    settingsManager.installDirectory +
                    'textures/earthmap4k.jpg';
                  if (settingsManager.nasaImages)
                    imgHiRes.src =
                    settingsManager.installDirectory +
                    'textures/mercator-tex.jpg';
                  if (settingsManager.trusatImages)
                    img.src =
                    settingsManager.installDirectory +
                    'textures/trusatvector-4096.jpg';
                  if (settingsManager.blueImages)
                    imgHiRes.src =
                    settingsManager.installDirectory +
                    'textures/world_blue-2048.png';
                  if (settingsManager.vectorImages)
                    imgHiRes.src =
                    settingsManager.installDirectory +
                    'textures/dayearthvector-4096.jpg';
                  if (settingsManager.hiresImages)
                    imgHiRes.src =
                    settingsManager.installDirectory +
                    'textures/earthmap16k.jpg';
                  if (settingsManager.hiresNoCloudsImages)
                    imgHiRes.src =
                    settingsManager.installDirectory +
                    'textures/earthmap16k.jpg';
                  earth.isUseHiRes = true;
                  imgHiRes.onload = function () {
                    gl.bindTexture(gl.TEXTURE_2D, texture);
                    gl.texImage2D(
                      gl.TEXTURE_2D,
                      0,
                      gl.RGBA,
                      gl.RGBA,
                      gl.UNSIGNED_BYTE,
                      imgHiRes
                    );
                    gl.texParameteri(
                      gl.TEXTURE_2D,
                      gl.TEXTURE_MAG_FILTER,
                      gl.LINEAR
                    );
                    gl.texParameteri(
                      gl.TEXTURE_2D,
                      gl.TEXTURE_MIN_FILTER,
                      gl.LINEAR
                    );
                    gl.texParameteri(
                      gl.TEXTURE_2D,
                      gl.TEXTURE_WRAP_S,
                      gl.REPEAT
                    );
                    texLoaded = true;
                    earth.isHiResReady = true;
                    onImageLoaded();
                  };
                };
            }

            // Night Color Texture
            {
                nightTexture = gl.createTexture();
                var nightImg = new Image();
                nightImg.onload = function () {
                    gl.bindTexture(gl.TEXTURE_2D, nightTexture);
                    gl.texImage2D(
                        gl.TEXTURE_2D,
                        0,
                        gl.RGBA,
                        gl.RGBA,
                        gl.UNSIGNED_BYTE,
                        nightImg
                    );
                    gl.texParameteri(
                        gl.TEXTURE_2D,
                        gl.TEXTURE_MAG_FILTER,
                        gl.LINEAR
                    );
                    gl.texParameteri(
                        gl.TEXTURE_2D,
                        gl.TEXTURE_MIN_FILTER,
                        gl.LINEAR
                    );
                    gl.texParameteri(
                        gl.TEXTURE_2D,
                        gl.TEXTURE_WRAP_S,
                        gl.REPEAT
                    );
                    // console.log('earth.js loaded nightearth');
                    nightLoaded = true;
                    onImageLoaded();
                };
                nightImg.src =
                    settingsManager.installDirectory +
                    'textures/earthlights512.jpg';

                earth.loadHiResNight = () => {
                  var nightImgHiRes = new Image();
                  if (!settingsManager.smallImages)
                  nightImgHiRes.src =
                      settingsManager.installDirectory +
                      'textures/earthlights4k.jpg';
                  if (settingsManager.vectorImages)
                      nightImgHiRes.src =
                          settingsManager.installDirectory +
                          'textures/dayearthvector-4096.jpg';
                  if (settingsManager.hiresImages || settingsManager.hiresNoCloudsImages)
                      nightImgHiRes.src =
                          settingsManager.installDirectory +
                          'textures/earthlights16k.jpg';
                  nightImgHiRes.onload = function () {
                      gl.bindTexture(gl.TEXTURE_2D, nightTexture);
                      gl.texImage2D(
                          gl.TEXTURE_2D,
                          0,
                          gl.RGBA,
                          gl.RGBA,
                          gl.UNSIGNED_BYTE,
                          nightImgHiRes
                      );
                      gl.texParameteri(
                          gl.TEXTURE_2D,
                          gl.TEXTURE_MAG_FILTER,
                          gl.LINEAR
                      );
                      gl.texParameteri(
                          gl.TEXTURE_2D,
                          gl.TEXTURE_MIN_FILTER,
                          gl.LINEAR
                      );
                      gl.texParameteri(
                          gl.TEXTURE_2D,
                          gl.TEXTURE_WRAP_S,
                          gl.REPEAT
                      );
                      nightLoaded = true;
                      onImageLoaded();
                  };
                };
            }

            // Bump Map
            {
                earth.bumpMap = {};
                earth.bumpMap.isReady = false;
                earth.bumpMap.texture = gl.createTexture();
                earth.bumpMap.img = new Image();
                earth.bumpMap.img.onload = function () {
                    gl.bindTexture(gl.TEXTURE_2D, earth.bumpMap.texture);
                    gl.texImage2D(
                        gl.TEXTURE_2D,
                        0,
                        gl.RGBA,
                        gl.RGBA,
                        gl.UNSIGNED_BYTE,
                        earth.bumpMap.img
                    );
                    gl.texParameteri(
                        gl.TEXTURE_2D,
                        gl.TEXTURE_MAG_FILTER,
                        gl.LINEAR
                    );
                    gl.texParameteri(
                        gl.TEXTURE_2D,
                        gl.TEXTURE_MIN_FILTER,
                        gl.LINEAR
                    );
                    gl.texParameteri(
                        gl.TEXTURE_2D,
                        gl.TEXTURE_WRAP_S,
                        gl.REPEAT
                    );
                    earth.bumpMap.isReady = true;
                    onImageLoaded();
                };
                earth.bumpMap.img.src =
                    settingsManager.installDirectory +
                    'textures/earthbump8k.jpg';
                if (settingsManager.smallImages)
                    earth.bumpMap.img.src =
                        settingsManager.installDirectory +
                        'textures/earthbump256.jpg';
                if (settingsManager.isMobileModeEnabled)
                    earth.bumpMap.img.src =
                        settingsManager.installDirectory +
                        'textures/earthbump4k.jpg';
                // 'textures/earthbump1k.jpg';
            }

            // Specular Map
            {
                earth.specularMap = {};
                earth.specularMap.isReady = false;
                earth.specularMap.texture = gl.createTexture();
                earth.specularMap.img = new Image();
                earth.specularMap.img.onload = function () {
                    gl.bindTexture(gl.TEXTURE_2D, earth.specularMap.texture);
                    gl.texImage2D(
                        gl.TEXTURE_2D,
                        0,
                        gl.RGBA,
                        gl.RGBA,
                        gl.UNSIGNED_BYTE,
                        earth.specularMap.img
                    );
                    gl.texParameteri(
                        gl.TEXTURE_2D,
                        gl.TEXTURE_MAG_FILTER,
                        gl.LINEAR
                    );
                    gl.texParameteri(
                        gl.TEXTURE_2D,
                        gl.TEXTURE_MIN_FILTER,
                        gl.LINEAR
                    );
                    gl.texParameteri(
                        gl.TEXTURE_2D,
                        gl.TEXTURE_WRAP_S,
                        gl.REPEAT
                    );
                    earth.specularMap.isReady = true;
                    onImageLoaded();
                };
                earth.specularMap.img.src =
                    settingsManager.installDirectory +
                    'textures/earthspec8k.jpg';
                if (settingsManager.smallImages)
                    earth.specularMap.img.src =
                        settingsManager.installDirectory +
                        'textures/earthspec256.jpg';
                if (settingsManager.isMobileModeEnabled)
                    earth.specularMap.img.src =
                        settingsManager.installDirectory +
                        'textures/earthspec4k.jpg';
                // 'textures/earthspec1k.jpg';
            }

            // generate a uvsphere bottom up, CCW order
            var vertPos = [];
            var vertNorm = [];
            var texCoord = [];
            for (let lat = 0; lat <= settingsManager.earthNumLatSegs; lat++) {
                var latAngle = (Math.PI / settingsManager.earthNumLatSegs) * lat - Math.PI / 2;
                var diskRadius = Math.cos(Math.abs(latAngle));
                var z = Math.sin(latAngle);
                // console.log('LAT: ' + latAngle * RAD2DEG + ' , Z: ' + z);
                // var i = 0;
                for (let lon = 0; lon <= settingsManager.earthNumLonSegs; lon++) {
                    // add an extra vertex for texture funness
                    var lonAngle = ((Math.PI * 2) / settingsManager.earthNumLonSegs) * lon;
                    var x = Math.cos(lonAngle) * diskRadius;
                    var y = Math.sin(lonAngle) * diskRadius;
                    // console.log('i: ' + i + '    LON: ' + lonAngle * RAD2DEG + ' X: ' + x + ' Y: ' + y)

                    // mercator cylindrical projection (simple angle interpolation)
                    var v = 1 - lat / settingsManager.earthNumLatSegs;
                    var u = 0.5 + lon / settingsManager.earthNumLonSegs; // may need to change to move map
                    // console.log('u: ' + u + ' v: ' + v);
                    // normals: should just be a vector from center to point (aka the point itself!

                    vertPos.push(x * RADIUS_OF_EARTH);
                    vertPos.push(y * RADIUS_OF_EARTH);
                    vertPos.push(z * RADIUS_OF_EARTH);
                    texCoord.push(u);
                    texCoord.push(v);
                    vertNorm.push(x);
                    vertNorm.push(y);
                    vertNorm.push(z);

                    // i++;
                }
            }

            // ok let's calculate vertex draw orders.... indiv triangles
            var vertIndex = [];
            for (let lat = 0; lat < settingsManager.earthNumLatSegs; lat++) {
                // this is for each QUAD, not each vertex, so <
                for (let lon = 0; lon < settingsManager.earthNumLonSegs; lon++) {
                    var blVert = lat * (settingsManager.earthNumLonSegs + 1) + lon; // there's settingsManager.earthNumLonSegs + 1 verts in each horizontal band
                    var brVert = blVert + 1;
                    var tlVert = (lat + 1) * (settingsManager.earthNumLonSegs + 1) + lon;
                    var trVert = tlVert + 1;
                    // console.log('bl: ' + blVert + ' br: ' + brVert +  ' tl: ' + tlVert + ' tr: ' + trVert);
                    vertIndex.push(blVert);
                    vertIndex.push(brVert);
                    vertIndex.push(tlVert);

                    vertIndex.push(tlVert);
                    vertIndex.push(trVert);
                    vertIndex.push(brVert);
                }
            }
            vertCount = vertIndex.length;

            vertPosBuf = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertPosBuf);
            gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(vertPos),
                gl.STATIC_DRAW
            );

            vertNormBuf = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertNormBuf);
            gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(vertNorm),
                gl.STATIC_DRAW
            );

            texCoordBuf = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuf);
            gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(texCoord),
                gl.STATIC_DRAW
            );

            vertIndexBuf = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertIndexBuf);
            gl.bufferData(
                gl.ELEMENT_ARRAY_BUFFER,
                new Uint16Array(vertIndex),
                gl.STATIC_DRAW
            );

            earth.loaded = true;
        };

        earth.update = () => {
            earth.lastTime = earthNow;
            timeManager.updatePropTime();
            earthNow = timeManager.propTimeVar;
            timeManager.selectedDate = earthNow;

            if (earth.lastTime - earthNow < 300) {
                earth.tDS = earthNow.toJSON();
                earth.timeTextStr = earth.timeTextStrEmpty;
                for (earth.iText = 11; earth.iText < 20; earth.iText++) {
                    // if (earth.iText < 10) earth.timeTextStr += earth.tDS[earth.iText];
                    // if (earth.iText === 10) earth.timeTextStr += ' ';
                    if (earth.iText > 11)
                        earth.timeTextStr += earth.tDS[earth.iText - 1];
                }
                if (
                    settingsManager.isPropRateChange &&
                    !settingsManager.isAlwaysHidePropRate &&
                    timeManager.propRate0 !== timeManager.propRate
                ) {
                    if (timeManager.propRate > 1.01 || timeManager.propRate < 0.99) {
                      if (timeManager.propRate < 10)
                        uiManager.toast(`Propagation Speed: ${timeManager.propRate.toFixed(1)}x`,'standby');
                      if (timeManager.propRate >= 10 && timeManager.propRate < 100)
                        uiManager.toast(`Propagation Speed: ${timeManager.propRate.toFixed(1)}x`,'caution');
                      if (timeManager.propRate >= 100)
                        uiManager.toast(`Propagation Speed: ${timeManager.propRate.toFixed(1)}x`,'serious');
                    } else {
                      uiManager.toast(`Propagation Speed: ${timeManager.propRate.toFixed(1)}x`,'normal');
                    }
                    timeManager.propRate0 = timeManager.propRate;
                    settingsManager.isPropRateChange = false;
                }

                if (!settingsManager.disableUI) {
                    if (!createClockDOMOnce) {
                        document.getElementById(
                            'datetime-text'
                        ).innerText = earth.timeTextStr;
                        createClockDOMOnce = true;
                    } else {
                        document.getElementById(
                            'datetime-text'
                        ).childNodes[0].nodeValue = earth.timeTextStr;
                    }
                }
            }

            // Don't update the time input unless it is currently being viewed.
            if (settingsManager.isEditTime || !settingsManager.cruncherReady) {
                $('#datetime-input-tb').val(
                    timeManager.selectedDate.toISOString().slice(0, 10) +
                        ' ' +
                        timeManager.selectedDate.toISOString().slice(11, 19)
                );
            }

            earth.earthJ = timeManager.jday(
                earthNow.getUTCFullYear(),
                earthNow.getUTCMonth() + 1, // NOTE:, this function requires months in range 1-12.
                earthNow.getUTCDate(),
                earthNow.getUTCHours(),
                earthNow.getUTCMinutes(),
                earthNow.getUTCSeconds()
            );
            earth.earthJ +=
                earthNow.getUTCMilliseconds() * MILLISECONDS_PER_DAY;

            earth.earthEra = satellite.gstime(earth.earthJ);

            sun.currentDirection();
            vec3.normalize(earth.lightDirection, earth.lightDirection);

            mvMatrix = mvMatrixEmpty;
            mat4.identity(mvMatrix);
            mat4.rotateZ(mvMatrix, mvMatrix, earth.earthEra);
            mat4.translate(mvMatrix, mvMatrix, earth.pos);
            // mat4.scale(mvMatrix, mvMatrix, [2,2,2]);
            nMatrix = nMatrixEmpty;
            mat3.normalFromMat4(nMatrix, mvMatrix);
        };

        earth.draw = function (pMatrix, camMatrix) {
            if (!earth.loaded) return;
            // //////////////////////////////////////////////////////////////////////
            // Draw Colored Earth First
            // //////////////////////////////////////////////////////////////////////

            // Change to the earth shader
            gl.useProgram(earthShader);
            // Change to the main drawing buffer
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);

            // Set the uniforms
            gl.uniformMatrix3fv(earthShader.uNormalMatrix, false, nMatrix);
            gl.uniformMatrix4fv(earthShader.uMvMatrix, false, mvMatrix);
            gl.uniformMatrix4fv(earthShader.uPMatrix, false, pMatrix);
            gl.uniformMatrix4fv(earthShader.uCamMatrix, false, camMatrix);
            gl.uniform3fv(earthShader.uLightDirection, earth.lightDirection);
            gl.uniform3fv(earthShader.uAmbientLightColor, [0.1, 0.1, 0.1]); // RGB ambient light
            gl.uniform3fv(earthShader.uDirectionalLightColor, [1.0, 1.0, 1.0]); // RGB directional light

            // Set the textures
            {
                // Day Map
                gl.uniform1i(earthShader.uSampler, 0);
                gl.activeTexture(gl.TEXTURE0);
                gl.bindTexture(gl.TEXTURE_2D, texture);

                // Night Map
                gl.uniform1i(earthShader.uNightSampler, 1);
                gl.activeTexture(gl.TEXTURE1);
                if (!earth.isDayNightToggle) {
                    gl.bindTexture(gl.TEXTURE_2D, nightTexture);
                } else {
                    gl.bindTexture(gl.TEXTURE_2D, texture);
                }

                // Bump Map
                gl.uniform1i(earthShader.uBumpMap, 2);
                gl.activeTexture(gl.TEXTURE2);
                gl.bindTexture(gl.TEXTURE_2D, earth.bumpMap.texture);

                // Specular Map
                gl.uniform1i(earthShader.uSpecMap, 3);
                gl.activeTexture(gl.TEXTURE3);
                gl.bindTexture(gl.TEXTURE_2D, earth.specularMap.texture);
            }

            // Select, Enable, and Set Attributes
            {
                gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuf);
                gl.enableVertexAttribArray(earthShader.aTexCoord);
                gl.vertexAttribPointer(
                    earthShader.aTexCoord,
                    2,
                    gl.FLOAT,
                    false,
                    0,
                    0
                );

                gl.bindBuffer(gl.ARRAY_BUFFER, vertPosBuf);
                gl.enableVertexAttribArray(earthShader.aVertexPosition);
                gl.vertexAttribPointer(
                    earthShader.aVertexPosition,
                    3,
                    gl.FLOAT,
                    false,
                    0,
                    0
                );
                // This needs to be up here not down with the GPU Picking
                gl.vertexAttribPointer(
                    gl.pickShaderProgram.aPos,
                    3,
                    gl.FLOAT,
                    false,
                    0,
                    0
                );

                gl.bindBuffer(gl.ARRAY_BUFFER, vertNormBuf);
                gl.enableVertexAttribArray(earthShader.aVertexNormal);
                gl.vertexAttribPointer(
                    earthShader.aVertexNormal,
                    3,
                    gl.FLOAT,
                    false,
                    0,
                    0
                );
            }

            // Select Vertex Indicies and then Draw Earth
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertIndexBuf);
            gl.drawElements(gl.TRIANGLES, vertCount, gl.UNSIGNED_SHORT, 0);

            // Disable attributes to avoid conflict with other shaders
            gl.disableVertexAttribArray(earthShader.aTexCoord);
            gl.disableVertexAttribArray(earthShader.aVertexPosition);
            gl.disableVertexAttribArray(earthShader.aVertexNormal);

            // //////////////////////////////////////////////////////////////////////
            // Draw Black GPU Picking Earth Mask Second
            // //////////////////////////////////////////////////////////////////////

            // Switch to GPU Picking Shader
            gl.useProgram(gl.pickShaderProgram);
            // Switch to the GPU Picking Frame Buffer
            gl.bindFramebuffer(gl.FRAMEBUFFER, gl.pickFb);

            // Set Uniforms
            gl.uniformMatrix4fv(
                gl.pickShaderProgram.uMvMatrix,
                false,
                mvMatrix
            );

            // Only Enable Position Attribute Since Color Doesn't Matter
            // for blacking out the earth
            gl.disableVertexAttribArray(gl.pickShaderProgram.aColor);
            gl.enableVertexAttribArray(gl.pickShaderProgram.aPos);
            gl.drawElements(gl.TRIANGLES, vertCount, gl.UNSIGNED_SHORT, 0);

            // Disable attributes to avoid conflict with other shaders
            // NOTE: This breaks satellite gpu picking.
            // gl.disableVertexAttribArray(gl.pickShaderProgram.aPos);

            return true;
        };

        window.earth = earth;
    })();

    // Atmosphere
    (function () {
        var atmosphere = {};
        atmosphere.lightDirection = [];

        let vertPosBuf, vertNormBuf, texCoordBuf, vertIndexBuf;
        let atmosphereShader;

        atmosphere.init = function () {
            // Make Fragment Shader
            let fragShader = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(fragShader, sceneManager.shaders.atmosphere.frag);
            gl.compileShader(fragShader);

            // Make Vertex Shader
            let vertShader = gl.createShader(gl.VERTEX_SHADER);
            gl.shaderSource(vertShader, sceneManager.shaders.atmosphere.vert);
            gl.compileShader(vertShader);

            // Create Program with Two Shaders
            atmosphereShader = gl.createProgram();
            gl.attachShader(atmosphereShader, vertShader);
            gl.attachShader(atmosphereShader, fragShader);
            gl.linkProgram(atmosphereShader);

            // Assign Attributes
            atmosphereShader.aVertexPosition = gl.getAttribLocation(
                atmosphereShader,
                'aVertexPosition'
            );
            atmosphereShader.aVertexNormal = gl.getAttribLocation(
                atmosphereShader,
                'aVertexNormal'
            );

            // Assign Uniforms
            atmosphereShader.uPMatrix = gl.getUniformLocation(
                atmosphereShader,
                'uPMatrix'
            );
            atmosphereShader.uCamMatrix = gl.getUniformLocation(
                atmosphereShader,
                'uCamMatrix'
            );
            atmosphereShader.uMvMatrix = gl.getUniformLocation(
                atmosphereShader,
                'uMvMatrix'
            );
            atmosphereShader.uNormalMatrix = gl.getUniformLocation(
                atmosphereShader,
                'uNormalMatrix'
            );
            atmosphereShader.uLightDirection = gl.getUniformLocation(
                atmosphereShader,
                'uLightDirection'
            );

            // Generate a UV Sphere Bottom Up, CCW order
            let vertPos = [];
            let vertNorm = [];
            for (let lat = 0; lat <= settingsManager.atmospherelatSegs; lat++) {
                let latAngle =
                    (Math.PI / settingsManager.atmospherelatSegs) * lat - Math.PI / 2;
                let diskRadius = Math.cos(Math.abs(latAngle));
                let z = Math.sin(latAngle);
                for (let lon = 0; lon <= settingsManager.atmospherelonSegs; lon++) {
                    // add an extra vertex for texture funness
                    let lonAngle = ((Math.PI * 2) / settingsManager.atmospherelonSegs) * lon;
                    let x = Math.cos(lonAngle) * diskRadius;
                    let y = Math.sin(lonAngle) * diskRadius;

                    vertPos.push(x * settingsManager.atmosphereSize);
                    vertPos.push(y * settingsManager.atmosphereSize);
                    vertPos.push(z * settingsManager.atmosphereSize);
                    vertNorm.push(x);
                    vertNorm.push(y);
                    vertNorm.push(z);
                }
            }

            // Calculate Vertex Draw Orders
            let vertIndex = [];
            for (let lat = 0; lat < settingsManager.atmospherelatSegs; lat++) {
                // this is for each QUAD, not each vertex, so <
                for (let lon = 0; lon < settingsManager.atmospherelonSegs; lon++) {
                    var blVert = lat * (settingsManager.atmospherelonSegs + 1) + lon; // there's settingsManager.atmospherelonSegs + 1 verts in each horizontal band
                    var brVert = blVert + 1;
                    var tlVert = (lat + 1) * (settingsManager.atmospherelonSegs + 1) + lon;
                    var trVert = tlVert + 1;
                    vertIndex.push(blVert);
                    vertIndex.push(brVert);
                    vertIndex.push(tlVert);

                    vertIndex.push(tlVert);
                    vertIndex.push(trVert);
                    vertIndex.push(brVert);
                }
            }
            atmosphere.vertCount = vertIndex.length;

            // Create Buffer for Vertex Positions
            vertPosBuf = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertPosBuf);
            gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(vertPos),
                gl.STATIC_DRAW
            );

            // Create Buffer for Vertex Normals
            vertNormBuf = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertNormBuf);
            gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(vertNorm),
                gl.STATIC_DRAW
            );

            // Create Buffer for Vertex Indicies
            vertIndexBuf = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertIndexBuf);
            gl.bufferData(
                gl.ELEMENT_ARRAY_BUFFER,
                new Uint16Array(vertIndex),
                gl.STATIC_DRAW
            );

            // Let Everyone Know This is Initialized
            atmosphere.loaded = true;
        };

        atmosphere.update = () => {
            // This should be called in sun before everyone else gets updated
            // sun.currentDirection();

            // Normalize light direction (should be done in earth)
            // vec3.normalize(earth.lightDirection, earth.lightDirection);

            // Start with an empyy model view matrix
            atmosphere.mvMatrix = mvMatrixEmpty;
            mat4.identity(atmosphere.mvMatrix);
            // Rotate model view matrix to prevent lines showing as camera rotates
            mat4.rotateY(
                atmosphere.mvMatrix,
                atmosphere.mvMatrix,
                90 * DEG2RAD - camPitch
            );
            // Scale the atmosphere to 0,0,0 - needed?
            mat4.translate(atmosphere.mvMatrix, atmosphere.mvMatrix, [0, 0, 0]);
            // Calculate normals
            atmosphere.nMatrix = nMatrixEmpty;
            mat3.normalFromMat4(atmosphere.nMatrix, atmosphere.mvMatrix);
        };

        atmosphere.draw = function (pMatrix, camMatrix) {
            if (!atmosphere.loaded) return;

            // Enable blending and ignore depth test (especially on self)
            gl.enable(gl.BLEND);
            gl.disable(gl.DEPTH_TEST);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

            // Change to the atmosphere shader
            gl.useProgram(atmosphereShader);
            // Change to the main drawing buffer
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);

            // Set the uniforms
            gl.uniformMatrix3fv(
                atmosphereShader.uNormalMatrix,
                false,
                atmosphere.nMatrix
            );
            gl.uniformMatrix4fv(
                atmosphereShader.uMvMatrix,
                false,
                atmosphere.mvMatrix
            );
            gl.uniformMatrix4fv(atmosphereShader.uPMatrix, false, pMatrix);
            gl.uniformMatrix4fv(atmosphereShader.uCamMatrix, false, camMatrix);
            gl.uniform3fv(
                atmosphereShader.uLightDirection,
                earth.lightDirection
            );

            // Select the vertex position buffer
            // Enable the attribute
            // Set the attribute
            gl.bindBuffer(gl.ARRAY_BUFFER, vertPosBuf);
            gl.enableVertexAttribArray(atmosphereShader.aVertexPosition);
            gl.vertexAttribPointer(
                atmosphereShader.aVertexPosition,
                3,
                gl.FLOAT,
                false,
                0,
                0
            );

            // Select the vertex normals buffer
            // Enable the attribute
            // Set the attribute
            gl.bindBuffer(gl.ARRAY_BUFFER, vertNormBuf);
            gl.enableVertexAttribArray(atmosphereShader.aVertexNormal);
            gl.vertexAttribPointer(
                atmosphereShader.aVertexNormal,
                3,
                gl.FLOAT,
                false,
                0,
                0
            );

            // Select the vertex indicies buffer
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertIndexBuf);
            // Draw everythign to screen
            gl.drawElements(
                gl.TRIANGLES,
                atmosphere.vertCount,
                gl.UNSIGNED_SHORT,
                0
            );

            // Disable attributes to avoid conflict with other shaders
            gl.disableVertexAttribArray(atmosphereShader.aVertexPosition);
            gl.disableVertexAttribArray(atmosphereShader.aVertexNormal);

            // Disable blending and reeneable depth test
            gl.disable(gl.BLEND);
            gl.enable(gl.DEPTH_TEST);
            return true;
        };

        window.atmosphere = atmosphere;
    })();

    // Sun
    (function () {
        var sun = {};
        sun.sunvar = {};

        sun.currentDirection = function () {
            timeManager.updatePropTime();
            sun.sunvar.now = timeManager.propTimeVar;
            sun.sunvar.j = timeManager.jday(
                sun.sunvar.now.getUTCFullYear(),
                sun.sunvar.now.getUTCMonth() + 1, // NOTE:, this function requires months in range 1-12.
                sun.sunvar.now.getUTCDate(),
                sun.sunvar.now.getUTCHours(),
                sun.sunvar.now.getUTCMinutes(),
                sun.sunvar.now.getUTCSeconds()
            );
            sun.sunvar.j +=
                sun.sunvar.now.getUTCMilliseconds() * MILLISECONDS_PER_DAY;

            return sun.getDirection(sun.sunvar.j);
        };
        sun.getDirection = function (jd) {
            sun.sunvar.n = jd - 2451545;
            sun.sunvar.L = 280.46 + 0.9856474 * sun.sunvar.n; // mean longitude of sun
            sun.sunvar.g = 357.528 + 0.9856003 * sun.sunvar.n; // mean anomaly
            sun.sunvar.L = sun.sunvar.L % 360.0;
            sun.sunvar.g = sun.sunvar.g % 360.0;

            sun.sunvar.ecLon =
                sun.sunvar.L +
                1.915 * Math.sin(sun.sunvar.g * DEG2RAD) +
                0.02 * Math.sin(2 * sun.sunvar.g * DEG2RAD);
            sun.sunvar.ob = _getObliquity(jd);

            earth.lightDirection[0] = Math.cos(sun.sunvar.ecLon * DEG2RAD);
            earth.lightDirection[1] =
                Math.cos(sun.sunvar.ob * DEG2RAD) *
                Math.sin(sun.sunvar.ecLon * DEG2RAD);
            earth.lightDirection[2] =
                Math.sin(sun.sunvar.ob * DEG2RAD) *
                Math.sin(sun.sunvar.ecLon * DEG2RAD);

            // return [sun.sunvar.x, sun.sunvar.y, sun.sunvar.z];
        };

        function _getObliquity(jd) {
            sun.sunvar.t = (jd - 2451545) / 3652500;

            sun.sunvar.obliq =
                84381.448 -
                4680.93 * sun.sunvar.t -
                1.55 * Math.pow(sun.sunvar.t, 2) +
                1999.25 * Math.pow(sun.sunvar.t, 3) -
                51.38 * Math.pow(sun.sunvar.t, 4) -
                249.67 * Math.pow(sun.sunvar.t, 5) -
                39.05 * Math.pow(sun.sunvar.t, 6) +
                7.12 * Math.pow(sun.sunvar.t, 7) +
                27.87 * Math.pow(sun.sunvar.t, 8) +
                5.79 * Math.pow(sun.sunvar.t, 9) +
                2.45 * Math.pow(sun.sunvar.t, 10);

            /* Human Readable Version
      var ob =  // arcseconds
        84381.448
       - 4680.93  * t
       -    1.55  * Math.pow(t, 2)
       + 1999.25  * Math.pow(t, 3)
       -   51.38  * Math.pow(t, 4)
       -  249.67  * Math.pow(t, 5)
       -   39.05  * Math.pow(t, 6)
       +    7.12  * Math.pow(t, 7)
       +   27.87  * Math.pow(t, 8)
       +    5.79  * Math.pow(t, 9)
       +    2.45  * Math.pow(t, 10);
       */

            return sun.sunvar.obliq / 3600.0;
        }

        // Draw Sun
        let NUM_LAT_SEGS = 64;
        let NUM_LON_SEGS = 64;

        let vertPosBuf, vertNormBuf, texCoordBuf, vertIndexBuf; // GPU mem buffers, data and stuff?
        let vertCount;
        let mvMatrix;
        let nMatrix;
        let sunShader;

        sun.pos = [0, 0, 0];
        sun.pos2 = [0, 0, 0];

        var texture, nightTexture;

        var texLoaded = false;
        var nightLoaded = false;
        var loaded = false;

        sun.init = function () {
            // Make New Vertex Array Objects
            // sun.vao = gl.createVertexArray();
            // gl.bindVertexArray(sun.vao);

            let fragShader = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(fragShader, sceneManager.shaders.sun.frag);
            gl.compileShader(fragShader);

            let vertShader = gl.createShader(gl.VERTEX_SHADER);
            gl.shaderSource(vertShader, sceneManager.shaders.sun.vert);
            gl.compileShader(vertShader);

            sunShader = gl.createProgram();
            gl.attachShader(sunShader, vertShader);
            gl.attachShader(sunShader, fragShader);
            gl.linkProgram(sunShader);

            sunShader.aVertexPosition = gl.getAttribLocation(sunShader,'aVertexPosition');
            sunShader.aTexCoord = gl.getAttribLocation(sunShader, 'aTexCoord');
            sunShader.aVertexNormal = gl.getAttribLocation(sunShader,'aVertexNormal');
            sunShader.uPMatrix = gl.getUniformLocation(sunShader, 'uPMatrix');
            sunShader.uCamMatrix = gl.getUniformLocation(sunShader,'uCamMatrix');
            sunShader.uMvMatrix = gl.getUniformLocation(sunShader, 'uMvMatrix');
            sunShader.uNormalMatrix = gl.getUniformLocation(sunShader,'uNormalMatrix');
            sunShader.uLightDirection = gl.getUniformLocation(sunShader,'uLightDirection');
            sunShader.uSunDis = gl.getUniformLocation(sunShader,'uSunDis');

            // generate a uvsphere bottom up, CCW order
            var vertPos = [];
            var vertNorm = [];
            var texCoord = [];
            for (let lat = 0; lat <= NUM_LAT_SEGS; lat++) {
                var latAngle = (Math.PI / NUM_LAT_SEGS) * lat - Math.PI / 2;
                var diskRadius = Math.cos(Math.abs(latAngle));
                var z = Math.sin(latAngle);
                // console.log('LAT: ' + latAngle * RAD2DEG + ' , Z: ' + z);
                // var i = 0;
                for (let lon = 0; lon <= NUM_LON_SEGS; lon++) {
                    // add an extra vertex for texture funness
                    var lonAngle = ((Math.PI * 2) / NUM_LON_SEGS) * lon;
                    var x = Math.cos(lonAngle) * diskRadius;
                    var y = Math.sin(lonAngle) * diskRadius;
                    // console.log('i: ' + i + '    LON: ' + lonAngle * RAD2DEG + ' X: ' + x + ' Y: ' + y)

                    // mercator cylindrical projection (simple angle interpolation)
                    var v = 1 - lat / NUM_LAT_SEGS;
                    var u = 0.5 + lon / NUM_LON_SEGS; // may need to change to move map
                    // console.log('u: ' + u + ' v: ' + v);
                    // normals: should just be a vector from center to point (aka the point itself!

                    vertPos.push(x * RADIUS_OF_DRAW_SUN);
                    vertPos.push(y * RADIUS_OF_DRAW_SUN);
                    vertPos.push(z * RADIUS_OF_DRAW_SUN);
                    texCoord.push(u);
                    texCoord.push(v);
                    vertNorm.push(x);
                    vertNorm.push(y);
                    vertNorm.push(z);

                    // i++;
                }
            }

            // ok let's calculate vertex draw orders.... indiv triangles
            var vertIndex = [];
            for (let lat = 0; lat < NUM_LAT_SEGS; lat++) {
                // this is for each QUAD, not each vertex, so <
                for (let lon = 0; lon < NUM_LON_SEGS; lon++) {
                    var blVert = lat * (NUM_LON_SEGS + 1) + lon; // there's NUM_LON_SEGS + 1 verts in each horizontal band
                    var brVert = blVert + 1;
                    var tlVert = (lat + 1) * (NUM_LON_SEGS + 1) + lon;
                    var trVert = tlVert + 1;
                    // console.log('bl: ' + blVert + ' br: ' + brVert +  ' tl: ' + tlVert + ' tr: ' + trVert);
                    vertIndex.push(blVert);
                    vertIndex.push(brVert);
                    vertIndex.push(tlVert);

                    vertIndex.push(tlVert);
                    vertIndex.push(trVert);
                    vertIndex.push(brVert);
                }
            }
            vertCount = vertIndex.length;

            vertPosBuf = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertPosBuf);
            gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(vertPos),
                gl.STATIC_DRAW
            );

            vertNormBuf = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertNormBuf);
            gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(vertNorm),
                gl.STATIC_DRAW
            );

            vertIndexBuf = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertIndexBuf);
            gl.bufferData(
                gl.ELEMENT_ARRAY_BUFFER,
                new Uint16Array(vertIndex),
                gl.STATIC_DRAW
            );

            sun.loaded = true;
        };

        let sunMaxDist;
        sun.draw = function (pMatrix, camMatrix) {
            if (!sun.loaded) return;

            // Switch Vertex Array Objects
            // gl.bindVertexArray(sun.vao);

            // #### sun.getXYZ ###
            // Get Time
            if (timeManager.propRate === 0) {
              timeManager.propTimeVar.setTime(
                Number(timeManager.propRealTime) + timeManager.propOffset
              );
            } else {
              timeManager.propTimeVar.setTime(
                Number(timeManager.propRealTime) +
                timeManager.propOffset +
                (Number(timeManager.now) -
                Number(timeManager.propRealTime)) *
                timeManager.propRate
              );
            }
            sun.now = timeManager.propTimeVar;

            sun.sunvar.j = timeManager.jday(
                sun.now.getUTCFullYear(),
                sun.now.getUTCMonth() + 1, // NOTE:, this function requires months in range 1-12.
                sun.now.getUTCDate(),
                sun.now.getUTCHours(),
                sun.now.getUTCMinutes(),
                sun.now.getUTCSeconds()
            );
            sun.sunvar.j += sun.now.getUTCMilliseconds() * MILLISECONDS_PER_DAY;
            sun.sunvar.gmst = satellite.gstime(sun.sunvar.j);
            sun.sunvar.jdo = new A.JulianDay(sun.sunvar.j); // now

            //var observerGd = sensorManager.currentSensor.observerGd;
            //var coord = A.EclCoord.fromWgs84(observerGd.latitude * RAD2DEG, observerGd.longitude * RAD2DEG, observerGd.height);

            sun.sunvar.coord = A.EclCoord.fromWgs84(0, 0, 0);

            // AZ / EL Calculation
            sun.sunvar.tp = A.Solar.topocentricPosition(sun.sunvar.jdo, sun.sunvar.coord, false);
            sun.sunvar.azimuth = sun.sunvar.tp.hz.az * RAD2DEG + (180 % 360);
            sun.sunvar.elevation = (sun.sunvar.tp.hz.alt * RAD2DEG) % 360;

            // Range Calculation
            var T = new A.JulianDay(
                A.JulianDay.dateToJD(sun.now)
            ).jdJ2000Century();
            sun.sunvar.g = (A.Solar.meanAnomaly(T) * 180) / Math.PI;
            sun.sunvar.g = sun.sunvar.g % 360.0;
            sun.sunvar.R =
                1.00014 -
                0.01671 * Math.cos(sun.sunvar.g) -
                0.00014 * Math.cos(2 * sun.sunvar.g);
            sun.sunvar.range = (sun.sunvar.R * 149597870700) / 1000; // au to km conversion

            // RAE to ECI
            sun.eci = satellite.ecfToEci(
                lookAnglesToEcf(sun.sunvar.azimuth, sun.sunvar.elevation, sun.sunvar.range, 0, 0, 0),
                sun.sunvar.gmst
            );

            sun.realXyz = { x: sun.eci.x, y: sun.eci.y, z: sun.eci.z };
            // #### sun.getXYZ ###

            sunMaxDist = Math.max(
                Math.max(Math.abs(sun.realXyz.x), Math.abs(sun.realXyz.y)),
                Math.abs(sun.realXyz.z)
            );
            sun.pos[0] = (sun.realXyz.x / sunMaxDist) * SUN_SCALAR_DISTANCE;
            sun.pos[1] = (sun.realXyz.y / sunMaxDist) * SUN_SCALAR_DISTANCE;
            sun.pos[2] = (sun.realXyz.z / sunMaxDist) * SUN_SCALAR_DISTANCE;
            sun.pos2[0] = sun.pos[0] * 100;
            sun.pos2[1] = sun.pos[1] * 100;
            sun.pos2[2] = sun.pos[2] * 100;

            mvMatrix = mvMatrixEmpty;
            mat4.identity(mvMatrix);

            mat4.translate(mvMatrix, mvMatrix, sun.pos);
            // Keep the back of the sun sphere directly behind the front of the
            // sun sphere so there is only one sun
            // Depricated with use of fragment discard
            // mat4.rotateX(mvMatrix, mvMatrix, -camPitch);
            // mat4.rotateZ(mvMatrix, mvMatrix, -camYaw);

            nMatrix = nMatrixEmpty;
            mat3.normalFromMat4(nMatrix, mvMatrix);

            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

            gl.useProgram(sunShader);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);

            gl.uniformMatrix3fv(sunShader.uNormalMatrix, false, nMatrix);
            gl.uniformMatrix4fv(sunShader.uMvMatrix, false, mvMatrix);
            gl.uniformMatrix4fv(sunShader.uPMatrix, false, pMatrix);
            gl.uniformMatrix4fv(sunShader.uCamMatrix, false, camMatrix);
            gl.uniform3fv(sunShader.uLightDirection, earth.lightDirection);
            gl.uniform1f(sunShader.uSunDis, Math.sqrt(sun.pos[0]**2 + sun.pos[1]**2 + sun.pos[2]**2));

            gl.bindBuffer(gl.ARRAY_BUFFER, vertPosBuf);
            gl.enableVertexAttribArray(sunShader.aVertexPosition);
            gl.vertexAttribPointer(
                sunShader.aVertexPosition,
                3,
                gl.FLOAT,
                false,
                0,
                0
            );

            gl.bindBuffer(gl.ARRAY_BUFFER, vertNormBuf);
            gl.enableVertexAttribArray(sunShader.aVertexNormal);
            gl.vertexAttribPointer(
                sunShader.aVertexNormal,
                3,
                gl.FLOAT,
                false,
                0,
                0
            );

            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertIndexBuf);
            gl.drawElements(gl.TRIANGLES, vertCount, gl.UNSIGNED_SHORT, 0);

            // gl.disable(gl.BLEND);
            return true;
        };

        window.sun = sun;
    })();

    // Moon
    (function () {
        // Draw Moon
        let NUM_LAT_SEGS = 32;
        let NUM_LON_SEGS = 32;

        let vertPosBuf, vertNormBuf, texCoordBuf, vertIndexBuf; // GPU mem buffers, data and stuff?
        let vertCount;
        let mvMatrix;
        let nMatrix;
        let moonShader;
        let moon = {};
        moon.pos = [0, 0, 0];

        var texture;
        var texLoaded = false;

        function onImageLoaded() {
            if (texLoaded) {
                moon.loaded = true;
            }
        }

        moon.getXYZ = () => {
            // sun.sunvar.gmst and sun.now get calculated before the moon on each draw loop
            // reusing them speeds up the draw loop

            moon.moonPos = SunCalc.getMoonPosition(sun.now, 0, 0);
            moon.position = satellite.ecfToEci(
                lookAnglesToEcf(
                    180 + moon.moonPos.azimuth * RAD2DEG,
                    moon.moonPos.altitude * RAD2DEG,
                    moon.moonPos.distance,
                    0,
                    0,
                    0
                ),
                sun.sunvar.gmst
            );

            return {
                x: moon.position.x,
                y: moon.position.y,
                z: moon.position.z,
            };
        };

        moon.init = function () {
            let fragShader = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(fragShader, sceneManager.shaders.moon.frag);
            gl.compileShader(fragShader);

            let vertShader = gl.createShader(gl.VERTEX_SHADER);
            gl.shaderSource(vertShader, sceneManager.shaders.moon.vert);
            gl.compileShader(vertShader);

            moonShader = gl.createProgram();
            gl.attachShader(moonShader, vertShader);
            gl.attachShader(moonShader, fragShader);
            gl.linkProgram(moonShader);

            moonShader.aVertexPosition = gl.getAttribLocation(
                moonShader,
                'aVertexPosition'
            );
            moonShader.aTexCoord = gl.getAttribLocation(
                moonShader,
                'aTexCoord'
            );
            moonShader.aVertexNormal = gl.getAttribLocation(
                moonShader,
                'aVertexNormal'
            );
            moonShader.uPMatrix = gl.getUniformLocation(moonShader, 'uPMatrix');
            moonShader.uCamMatrix = gl.getUniformLocation(
                moonShader,
                'uCamMatrix'
            );
            moonShader.uMvMatrix = gl.getUniformLocation(
                moonShader,
                'uMvMatrix'
            );
            moonShader.uNormalMatrix = gl.getUniformLocation(
                moonShader,
                'uNormalMatrix'
            );
            moonShader.uSunPos = gl.getUniformLocation(moonShader, 'uSunPos');
            moonShader.uMoonDis = gl.getUniformLocation(moonShader, 'uMoonDis');
            moonShader.uSampler = gl.getUniformLocation(moonShader, 'uSampler');

            texture = gl.createTexture();
            var img = new Image();
            img.onload = function () {
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texImage2D(
                    gl.TEXTURE_2D,
                    0,
                    gl.RGBA,
                    gl.RGBA,
                    gl.UNSIGNED_BYTE,
                    img
                );
                gl.texParameteri(
                    gl.TEXTURE_2D,
                    gl.TEXTURE_MAG_FILTER,
                    gl.LINEAR
                );
                gl.texParameteri(
                    gl.TEXTURE_2D,
                    gl.TEXTURE_MIN_FILTER,
                    gl.LINEAR
                );
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
                // console.log('moon.js loaded texture');

                let moonXYZ = moon.getXYZ();
                let moonMaxDist = Math.max(
                    Math.max(Math.abs(moonXYZ.x), Math.abs(moonXYZ.y)),
                    Math.abs(moonXYZ.z)
                );
                moon.pos[0] = (moonXYZ.x / moonMaxDist) * MOON_SCALAR_DISTANCE;
                moon.pos[1] = (moonXYZ.y / moonMaxDist) * MOON_SCALAR_DISTANCE;
                moon.pos[2] = (moonXYZ.z / moonMaxDist) * MOON_SCALAR_DISTANCE;

                texLoaded = true;
                onImageLoaded();
            };
            img.src =
                settingsManager.installDirectory + 'textures/moon-1024.jpg';

            // generate a uvsphere bottom up, CCW order
            var vertPos = [];
            var vertNorm = [];
            var texCoord = [];
            for (let lat = 0; lat <= NUM_LAT_SEGS; lat++) {
                var latAngle = (Math.PI / NUM_LAT_SEGS) * lat - Math.PI / 2;
                var diskRadius = Math.cos(Math.abs(latAngle));
                var z = Math.sin(latAngle);
                // console.log('LAT: ' + latAngle * RAD2DEG + ' , Z: ' + z);
                // var i = 0;
                for (let lon = 0; lon <= NUM_LON_SEGS; lon++) {
                    // add an extra vertex for texture funness
                    var lonAngle = ((Math.PI * 2) / NUM_LON_SEGS) * lon;
                    var x = Math.cos(lonAngle) * diskRadius;
                    var y = Math.sin(lonAngle) * diskRadius;
                    // console.log('i: ' + i + '    LON: ' + lonAngle * RAD2DEG + ' X: ' + x + ' Y: ' + y)

                    // mercator cylindrical projection (simple angle interpolation)
                    var v = 1 - lat / NUM_LAT_SEGS;
                    var u = 0.5 + lon / NUM_LON_SEGS; // may need to change to move map
                    // console.log('u: ' + u + ' v: ' + v);
                    // normals: should just be a vector from center to point (aka the point itself!

                    vertPos.push(x * RADIUS_OF_DRAW_MOON);
                    vertPos.push(y * RADIUS_OF_DRAW_MOON);
                    vertPos.push(z * RADIUS_OF_DRAW_MOON);
                    texCoord.push(u);
                    texCoord.push(v);
                    vertNorm.push(x);
                    vertNorm.push(y);
                    vertNorm.push(z);

                    // i++;
                }
            }

            // ok let's calculate vertex draw orders.... indiv triangles
            var vertIndex = [];
            for (let lat = 0; lat < NUM_LAT_SEGS; lat++) {
                // this is for each QUAD, not each vertex, so <
                for (let lon = 0; lon < NUM_LON_SEGS; lon++) {
                    var blVert = lat * (NUM_LON_SEGS + 1) + lon; // there's NUM_LON_SEGS + 1 verts in each horizontal band
                    var brVert = blVert + 1;
                    var tlVert = (lat + 1) * (NUM_LON_SEGS + 1) + lon;
                    var trVert = tlVert + 1;
                    // console.log('bl: ' + blVert + ' br: ' + brVert +  ' tl: ' + tlVert + ' tr: ' + trVert);
                    vertIndex.push(blVert);
                    vertIndex.push(brVert);
                    vertIndex.push(tlVert);

                    vertIndex.push(tlVert);
                    vertIndex.push(trVert);
                    vertIndex.push(brVert);
                }
            }
            vertCount = vertIndex.length;

            vertPosBuf = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertPosBuf);
            gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(vertPos),
                gl.STATIC_DRAW
            );

            vertNormBuf = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertNormBuf);
            gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(vertNorm),
                gl.STATIC_DRAW
            );

            texCoordBuf = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuf);
            gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(texCoord),
                gl.STATIC_DRAW
            );

            vertIndexBuf = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertIndexBuf);
            gl.bufferData(
                gl.ELEMENT_ARRAY_BUFFER,
                new Uint16Array(vertIndex),
                gl.STATIC_DRAW
            );
        };

        moon.draw = function (pMatrix, camMatrix) {
            if (!moon.loaded) return;
            // Switch Vertex Array Objects
            // gl.bindVertexArray(moon.vao);

            // Needed because geocentric earth
            moon.moonPos = SunCalc.getMoonPosition(sun.now, 0, 0);
            moon.position = satellite.ecfToEci(
                lookAnglesToEcf(
                    180 + moon.moonPos.azimuth * RAD2DEG,
                    moon.moonPos.altitude * RAD2DEG,
                    moon.moonPos.distance,
                    0,
                    0,
                    0
                ),
                sun.sunvar.gmst
            );

            moon.moonXYZ = {
                x: moon.position.x,
                y: moon.position.y,
                z: moon.position.z,
            };

            moon.moonMaxDist = Math.max(
                Math.max(Math.abs(moon.moonXYZ.x), Math.abs(moon.moonXYZ.y)),
                Math.abs(moon.moonXYZ.z)
            );
            moon.pos[0] = (moon.moonXYZ.x / moon.moonMaxDist) * MOON_SCALAR_DISTANCE;
            moon.pos[1] = (moon.moonXYZ.y / moon.moonMaxDist) * MOON_SCALAR_DISTANCE;
            moon.pos[2] = (moon.moonXYZ.z / moon.moonMaxDist) * MOON_SCALAR_DISTANCE;

            mvMatrix = mvMatrixEmpty;
            mat4.identity(mvMatrix);
            mat4.translate(mvMatrix, mvMatrix, moon.pos);

            nMatrix = nMatrixEmpty;
            mat3.normalFromMat4(nMatrix, mvMatrix);

            // gl.enable(gl.CULL_FACE);

            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

            gl.useProgram(moonShader);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);

            gl.uniformMatrix3fv(moonShader.uNormalMatrix, false, nMatrix);
            gl.uniformMatrix4fv(moonShader.uMvMatrix, false, mvMatrix);
            gl.uniformMatrix4fv(moonShader.uPMatrix, false, pMatrix);
            gl.uniformMatrix4fv(moonShader.uCamMatrix, false, camMatrix);
            gl.uniform3fv(moonShader.uSunPos, sun.pos2);
            gl.uniform1f(moonShader.uMoonDis, Math.sqrt(moon.pos[0]**2 + moon.pos[1]**2 + moon.pos[2]**2));

            gl.uniform1i(moonShader.uSampler, 0); // point sampler to TEXTURE0
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, texture); // bind texture to TEXTURE0

            gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuf);
            gl.enableVertexAttribArray(moonShader.aTexCoord);
            gl.vertexAttribPointer(
                moonShader.aTexCoord,
                2,
                gl.FLOAT,
                false,
                0,
                0
            );

            gl.bindBuffer(gl.ARRAY_BUFFER, vertPosBuf);
            gl.enableVertexAttribArray(moonShader.aVertexPosition);
            gl.vertexAttribPointer(
                moonShader.aVertexPosition,
                3,
                gl.FLOAT,
                false,
                0,
                0
            );

            gl.bindBuffer(gl.ARRAY_BUFFER, vertNormBuf);
            gl.enableVertexAttribArray(moonShader.aVertexNormal);
            gl.vertexAttribPointer(
                moonShader.aVertexNormal,
                3,
                gl.FLOAT,
                false,
                0,
                0
            );

            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertIndexBuf);
            gl.drawElements(gl.TRIANGLES, vertCount, gl.UNSIGNED_SHORT, 0);

            gl.disableVertexAttribArray(moonShader.aTexCoord);
            gl.disableVertexAttribArray(moonShader.aVertexPosition);
            gl.disableVertexAttribArray(moonShader.aVertexNormal);

            // gl.disable(gl.CULL_FACE);

            // Done Drawing
            return true;
        };
        window.moon = moon;
    })();

    function lookAnglesToEcf(
        azimuthDeg,
        elevationDeg,
        slantRange,
        obs_lat,
        obs_long,
        obs_alt
    ) {
        // site ecef in meters
        var geodeticCoords = {};
        geodeticCoords.latitude = obs_lat;
        geodeticCoords.longitude = obs_long;
        geodeticCoords.height = obs_alt;

        var siteXYZ = satellite.geodeticToEcf(geodeticCoords);
        var sitex, sitey, sitez;
        sitex = siteXYZ.x;
        sitey = siteXYZ.y;
        sitez = siteXYZ.z;

        // some needed calculations
        var slat = Math.sin(obs_lat);
        var slon = Math.sin(obs_long);
        var clat = Math.cos(obs_lat);
        var clon = Math.cos(obs_long);

        // azRad = azRad % 360;

        var azRad = DEG2RAD * azimuthDeg;
        var elRad = DEG2RAD * elevationDeg;

        // az,el,range to sez convertion
        var south = -slantRange * Math.cos(elRad) * Math.cos(azRad);
        var east = slantRange * Math.cos(elRad) * Math.sin(azRad);
        var zenith = slantRange * Math.sin(elRad);

        var x =
            slat * clon * south + -slon * east + clat * clon * zenith + sitex;
        var y =
            slat * slon * south + clon * east + clat * slon * zenith + sitey;
        var z = -clat * south + slat * zenith + sitez;

        return { x: x, y: y, z: z };
    }
    sceneManager.shaders = {
        earth: {
            frag: `
        precision mediump float;

        uniform vec3 uAmbientLightColor;
        uniform vec3 uDirectionalLightColor;
        uniform vec3 uLightDirection;

        varying vec2 vUv;
        varying vec3 vNormal;

        uniform sampler2D uSampler;
        uniform sampler2D uNightSampler;
        uniform sampler2D uBumpMap;
        uniform sampler2D uSpecMap;

        void main(void) {
          // float shininess = 1.0;
          // float diffuse = pow(max(dot(vNormal, uLightDirection), 0.0),shininess);
          // float diffuseLight = 0.7;
          float diffuse = max(dot(vNormal, uLightDirection), 0.0);
          vec3 bumpTexColor = texture2D(uBumpMap, vUv).rgb * diffuse * 0.4;
          vec3 specLightColor = texture2D(uSpecMap, vUv).rgb * diffuse * 0.1;

          vec3 dayColor = uAmbientLightColor + (uDirectionalLightColor * diffuse);
          vec3 dayTexColor = texture2D(uSampler, vUv).rgb * dayColor;
          vec3 nightColor = texture2D(uNightSampler, vUv).rgb * pow(1.0 - diffuse, 2.0);

          gl_FragColor = vec4(dayTexColor + nightColor + bumpTexColor + specLightColor, 1.0);
        }
        `,
            vert: `
        attribute vec3 aVertexPosition;

        attribute vec2 aTexCoord;
        attribute vec3 aVertexNormal;
        uniform mat4 uPMatrix;
        uniform mat4 uCamMatrix;
        uniform mat4 uMvMatrix;
        uniform mat3 uNormalMatrix;

        varying vec2 vUv;
        varying vec3 vNormal;

        void main(void) {
          gl_Position = uPMatrix * uCamMatrix * uMvMatrix * vec4(aVertexPosition, 1.0);
          vUv = aTexCoord;

          vNormal = uNormalMatrix * aVertexNormal;
        }
        `,
        },
        sun: {
            frag: `
        precision mediump float;
        uniform vec3 uLightDirection;

        varying vec3 vNormal;
        varying float vDist;
        varying float vDist2;

        void main(void) {
          // Hide the Back Side of the Sphere to prevent duplicate suns
          float darkAmount = max(dot(vNormal, -uLightDirection), 0.1);
          // Create blur effect
          float a = pow(vDist \/ 2.0 * -1.0 + 1.1, 10.0) * darkAmount;
          // Set colors
          float r = 1.0 * a;
          float g = 1.0 * a;
          float b = 0.4 * a;

          if (vDist2 > 1.0) {
            discard;
            // r = 0.0;
            // g = 1.0;
            // b = 0.0;
            // a = 1.0;
          }

          gl_FragColor = vec4(vec3(r,g,b), a);
        }
      `,
            vert: `
        attribute vec3 aVertexPosition;
        attribute vec3 aVertexNormal;

        uniform mat4 uPMatrix;
        uniform mat4 uCamMatrix;
        uniform mat4 uMvMatrix;
        uniform mat3 uNormalMatrix;
        uniform float uSunDis;

        varying vec3 vNormal;
        varying float vDist;
        varying float vDist2;

        void main(void) {
          vec4 position = uMvMatrix * vec4(aVertexPosition, 1.0);
          vec4 position0 = uCamMatrix * uMvMatrix * vec4(vec3(0.0,0.0,0.0), 1.0);
          vec4 position1 = uCamMatrix * position;
          gl_Position = uPMatrix * position1;
          vDist = distance(position0.xz,position1.xz) \/ ${RADIUS_OF_DRAW_SUN}.0;
          vDist2 = distance(position.xyz,vec3(0.0,0.0,0.0)) \/ uSunDis;
          vNormal = uNormalMatrix * aVertexNormal;
        }`,
        },
        moon: {
            frag: `
        precision mediump float;

        uniform vec3 uLightDirection;
        varying vec2 vUv;
        varying vec3 vNormal;

        uniform sampler2D uSampler;
        uniform vec3 uSunPos;

        varying float vDist;

        void main(void) {
          // Moon Position - Sun Position
          vec3 LightDirection = uSunPos - vec3(0.0,0.0,0.0);
          LightDirection = normalize(LightDirection);

          float diffuse = max(dot(vNormal, LightDirection), 0.0);
          vec3 ambientLight = vec3(0.05,0.05,0.05);

          vec3 litTexColor = texture2D(uSampler, vUv).rgb * (ambientLight + diffuse * 1.5);

          if (vDist > 1.0) {
            discard;
            // litTexColor = vec3(1.0,0.0,0.0);
          }

          gl_FragColor = vec4(litTexColor, 1.0);
        }
      `,
            vert: `
        attribute vec3 aVertexPosition;

        attribute vec2 aTexCoord;
        attribute vec3 aVertexNormal;

        uniform mat4 uPMatrix;
        uniform mat4 uCamMatrix;
        uniform mat4 uMvMatrix;
        uniform mat3 uNormalMatrix;
        uniform float uMoonDis;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying float vDist;

        void main(void) {
          vec4 position = uMvMatrix * vec4(aVertexPosition, 1.0);
          gl_Position = uPMatrix * uCamMatrix * position;
          vDist = distance(position.xyz,vec3(0.0,0.0,0.0)) \/ uMoonDis;
          vUv = aTexCoord;

          vNormal = uNormalMatrix * aVertexNormal;
        }
      `,
        },
        atmosphere: {
            frag: `
        precision mediump float;

        uniform vec3 uLightDirection;
        varying vec3 vNormal;
        varying float vDist;

        void main () {
          float sunAmount = max(dot(vNormal, uLightDirection), 0.1);
          float darkAmount = max(dot(vNormal, -uLightDirection), 0.0);
          float a4 = pow(1.3 - vDist / 2.0, 1.1) * 2.0;
          float r = 1.0 - sunAmount;
          float g = max(1.0 - sunAmount, 0.75) - darkAmount;
          float b = max(sunAmount, 0.8) - darkAmount;
          float a1 = min(sunAmount, 0.8) * 2.0;
          float a2 = min(pow(darkAmount / 1.15, 2.0),0.2);
          float a3 = pow(vDist,2.0) * -1.0 + 1.2;
          float a = min(a1 - a2, a3) * a4;
          gl_FragColor    = vec4(vec3(r,g,b), a);
        }
      `,
            vert: `
        attribute vec3 aVertexPosition;
        attribute vec3 aVertexNormal;

        uniform mat4 uPMatrix;
        uniform mat4 uCamMatrix;
        uniform mat4 uMvMatrix;
        uniform mat3 uNormalMatrix;

        varying vec3 vNormal;
        varying float vDist;

        void main(void) {
          vec4 position1 = uCamMatrix * uMvMatrix * vec4(aVertexPosition, 1.0);
          vec4 position0 = uCamMatrix * uMvMatrix * vec4(vec3(0.0,0.0,0.0), 1.0);
          gl_Position = uPMatrix * position1;
          vDist = distance(position0.xz,position1.xz) \/ ${settingsManager.atmosphereSize}.0;
          vNormal = normalize( uNormalMatrix * aVertexNormal );
        }
      `,
        },
    };

    window.sceneManager = sceneManager;
})();

// TODO Merge this with the above function
(function () {
    var shaderLoader = {};

    shaderLoader.shaderData = [
        {
            name: 'dot-fragment.glsl',
            code: `
      ${settingsManager.desktopOnlySatShaderFix1}
      precision mediump float;

      varying vec4 vColor;
      varying float vStar;
      varying float vDist;

      float when_lt(float x, float y) {
        return max(sign(y - x), 0.0);
      }
      float when_ge(float x, float y) {
        return 1.0 - when_lt(x, y);
      }

      void main(void) {

        vec2 ptCoord = gl_PointCoord * 2.0 - vec2(1.0, 1.0);
        float r = 0.0;
        float alpha = 0.0;
        // If not a star and not on the ground
        r += (${settingsManager.satShader.blurFactor1} - min(abs(length(ptCoord)), 1.0)) * when_lt(vDist, 200000.0) * when_ge(vDist, 6421.0);
        alpha += (pow(2.0 * r + ${settingsManager.satShader.blurFactor2}, 3.0)) * when_lt(vDist, 200000.0) * when_ge(vDist, 6421.0);

        // If on the ground
        r += (${settingsManager.satShader.blurFactor1} - min(abs(length(ptCoord)), 1.0)) * when_lt(vDist, 6421.0);
        alpha += (pow(2.0 * r + ${settingsManager.satShader.blurFactor2}, 3.0)) * when_lt(vDist, 6471.0);

        // If a star
        r += (${settingsManager.satShader.blurFactor3} - min(abs(length(ptCoord)), 1.0)) * when_ge(vDist, 200000.0);
        alpha += (pow(2.0 * r + ${settingsManager.satShader.blurFactor4}, 3.0)) * when_ge(vDist, 200000.0);

        alpha = min(alpha, 1.0);
        if (alpha == 0.0) discard;
        gl_FragColor = vec4(vColor.rgb, vColor.a * alpha);
        // Reduce Flickering from Depth Fighting
        ${settingsManager.desktopOnlySatShaderFix2}
      }
    `,
        },
        {
            name: 'dot-vertex-var.glsl',
            code: `
        attribute vec3 aPos;
        attribute vec4 aColor;
        attribute float aStar;

        uniform float minSize;
        uniform float maxSize;

        uniform mat4 uCamMatrix;
        uniform mat4 uMvMatrix;
        uniform mat4 uPMatrix;

        varying vec4 vColor;
        varying float vStar;
        varying float vDist;

        float when_lt(float x, float y) {
          return max(sign(y - x), 0.0);
        }
        float when_ge(float x, float y) {
          return 1.0 - when_lt(x, y);
        }

        void main(void) {
          vec4 position = uPMatrix * uCamMatrix *  uMvMatrix * vec4(aPos, 1.0);
          float drawSize = 0.0;
          float dist = distance(vec3(0.0, 0.0, 0.0),aPos.xyz);

          // Satellite
          drawSize +=
            when_lt(aStar, 0.5) *
            (min(max(pow(${settingsManager.satShader.distanceBeforeGrow} \/ position.z, 2.1), minSize * 0.9), maxSize) * 1.0);

          // Something on the ground
          drawSize +=
            when_ge(aStar, 0.5) * when_lt(dist, 6421.0) *
            (min(max(pow(${settingsManager.satShader.distanceBeforeGrow} \/ position.z, 2.1), minSize * 0.75), maxSize) * 1.0);

          // Star or Searched Object
          drawSize +=
            when_ge(aStar, 0.5) * when_ge(dist, 6421.0) *
            (min(max(${settingsManager.satShader.starSize} * 100000.0 \/ dist, ${settingsManager.satShader.starSize}),${settingsManager.satShader.starSize} * 1.0));

          gl_PointSize = drawSize;
          gl_Position = position;
          vColor = aColor;
          vStar = aStar * 1.0;
          vDist = dist;
        }
      `,
        },
        {
          name: 'dot-fragment-rm.glsl',
          code: `
          precision mediump float;

          void main(void) {

            vec2 ptCoord = gl_PointCoord * 2.0 - vec2(1.0, 1.0);

            float r = (${settingsManager.satShader.blurFactor1} - min(abs(length(ptCoord)), 1.0));
            float alpha = (pow(2.0 * r + ${settingsManager.satShader.blurFactor2}, 3.0));

            alpha = min(alpha, 1.0);
            gl_FragColor = vec4(1.0, 0.0, 1.0, alpha);
          }
        `,
            },
            {
                name: 'dot-vertex-rm.glsl',
                code: `
            attribute vec3 aPos;

            uniform mat4 uCamMatrix;
            uniform mat4 uMvMatrix;
            uniform mat4 uPMatrix;

            void main(void) {
              vec4 position = uPMatrix * uCamMatrix *  uMvMatrix * vec4(aPos, 1.0);
              float drawSize = 0.0;
              float dist = distance(vec3(0.0, 0.0, 0.0),aPos.xyz);

              drawSize = (min(max(pow(${settingsManager.satShader.distanceBeforeGrow} \/ position.z, 2.1), 4.0 * 0.75), 80.0) * 1.0);

              gl_PointSize = drawSize;
              gl_Position = position;
            }
          `,
        },
        {
            name: 'pick-fragment.glsl',
            code: `
            precision mediump float;

            varying vec3 vColor;

            void main(void) {
              gl_FragColor = vec4(vColor, 1.0);
            }
          `,
        },
        {
            name: 'pick-vertex.glsl',
            code: `
              attribute vec3 aPos;
              attribute vec3 aColor;
              attribute float aPickable;

              uniform mat4 uCamMatrix;
              uniform mat4 uMvMatrix;
              uniform mat4 uPMatrix;

              varying vec3 vColor;

              void main(void) {
                float dotSize = 16.0;
                vec4 position = uPMatrix * uCamMatrix *  uMvMatrix * vec4(aPos, 1.0);
                gl_Position = position;
                gl_PointSize = dotSize * aPickable;
                vColor = aColor * aPickable;
              }
            `,
        },
        {
            name: 'path-fragment.glsl',
            code: `
              precision mediump float;

              varying vec4 vColor;
              varying float vAlpha;

              void main(void) {
                gl_FragColor = vec4(vColor[0],vColor[1],vColor[2], vColor[3] * vAlpha);
              }
            `,
        },
        {
            name: 'path-vertex.glsl',
            code: `
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
        },
    ];

    shaderLoader.shaderDataLen = shaderLoader.shaderData.length;

    var i = 0;
    shaderLoader.getShaderCode = function (name) {
        for (i = 0; i < shaderLoader.shaderDataLen; i++) {
            if (shaderLoader.shaderData[i].name === name) {
                return shaderLoader.shaderData[i].code;
            }
        }
        return null;
    };

    window.shaderLoader = shaderLoader;
})();

(function () {
  radarDataManager = {};
  var dotShaderRm;
  var vertShader;
  var fragShader;

  radarDataManager.radarData = [];
  radarDataManager.drawT1 = 0;

  radarDataManager.init = () => {
    $.getScript(`${settingsManager.installDirectory}radarData/radarData.txt`, function (resp) {
      settingsManager.loadStr('radarData');
      $('#loading-screen').fadeIn(1000, function () {
        radarDataManager.setup(resp);
        $('#loading-screen').fadeOut('slow');
        setTimeout(function () {
          settingsManager.loadStr('math');
        }, 800);
      });
    });
  };

  radarDataManager.changeTimeToFirstDataTime = () => {
    timeManager.propOffset = new Date(radarDataManager.radarData[0].t) - Date.now();
    $('#datetime-input-tb').datepicker(
      'setDate',
      new Date(timeManager.propRealTime + timeManager.propOffset)
    );
    satCruncher.postMessage({
      typ: 'offset',
      dat:
      timeManager.propOffset.toString() +
      ' ' +
      timeManager.propRate.toString(),
    });
  }

  radarDataManager.findFirstDataTime = () => {
    let now = timeManager.propTime() * 1;
    for (let i = 0; i < radarDataManager.radarData.length; i++) {
      if (radarDataManager.radarData[i].t > now - 3000) {
        radarDataManager.drawT1 = i;
        return;
      }
    }
  };

  radarDataManager.setup = (resp) => {
      db.log('radarDataManager.init');
      radarDataManager.radarData = JSON.parse(resp);

      let j, gmst, nowDate, radarDataECF, radarDataECI;
      for (let i = 0; i < radarDataManager.radarData.length; i++) {
        nowDate = new Date(radarDataManager.radarData[i].t);

        j = timeManager.jday(
          nowDate.getUTCFullYear(),
          nowDate.getUTCMonth() + 1, // Note, this function requires months in range 1-12.
          nowDate.getUTCDate(),
          nowDate.getUTCHours(),
          nowDate.getUTCMinutes(),
          nowDate.getUTCSeconds()
        );
        j += nowDate.getUTCMilliseconds() * 1.15741e-8; // days per millisecond

        gmst = satellite.gstime(j);

        // Update Radar Marker Position
        radarDataECF = satellite.lookAnglesToEcf(
            radarDataManager.radarData[i].a,
            radarDataManager.radarData[i].e,
            radarDataManager.radarData[i].r,
            sensorManager.sensorList.COD.lat * DEG2RAD,
            sensorManager.sensorList.COD.long * DEG2RAD,
            sensorManager.sensorList.COD.obshei
        );
        radarDataECI = satellite.ecfToEci(radarDataECF, gmst);
        radarDataManager.radarData[i].x = radarDataECI.x;
        radarDataManager.radarData[i].y = radarDataECI.y;
        radarDataManager.radarData[i].z = radarDataECI.z;
      }


      satSet.updateRadarData();
      radarDataManager.changeTimeToFirstDataTime();
      settingsManager.radarDataReady = true;
  };

  radarDataManager.createFakeData = () => {
    let fakeData = [];
    let now = Date.now();
    // Generates 1 Hour of 10x ~56ms data
    let k = 0;
    for (var i = 0; i < (60 * 60 * 1000); i+=1000) {
      for (let j = 0; j < 20; j++) {
        // Most in surveillance
        let az = -18 + (Math.random() * 240);
        let el = 2 + (Math.random() * 2);
        if (k < 2) el = 2 + (Math.random() * 83);
        k++;
        if (k == 10) k = 0;
        fakeData.push(
          {
            t: now - (1000 * 60 * 60 * 24 * 3) + i,
            dataType: 1,
            m: `${(Math.round(Math.random() * 100000))}`,
            ti: `${(Math.round(Math.random() * 100000))}`,
            oi: `${(Math.round(Math.random() * 100000))}`,
            si: `${(Math.round(Math.random() * 45000-30000))}`,
            mc: `${(Math.round(Math.random() * 5 - 3))}`,
            mo: `${(Math.round(Math.random() * 20))}`,
            r: 150 + (Math.random() * 5556),
            a: az,
            e: el,
            ae: Math.random() * 3,
            ee: Math.random() * 3,
            rc: (Math.random() * 40) / 10,
          }
        )
      }
    }
    return fakeData;
  }

  window.radarDataManager = radarDataManager;
})();
