import { Line } from './line.js';

class LineFactory {
  #getIdFromSensorName = null;
  #getIdFromStarName = null;
  #getSat = null;
  #getSatPosOnly = null;
  #i = 0;
  #tempStar1 = null;
  #tempStar2 = null;

  constructor(gl, shader, getIdFromSensorNameRef, getIdFromStarNameRef, getSatRef, getSatPosOnlyRef) {
    this.#getIdFromSensorName = getIdFromSensorNameRef;
    this.#getIdFromStarName = getIdFromStarNameRef;
    this.#getSat = getSatRef;
    this.#getSatPosOnly = getSatPosOnlyRef;
    this.gl = gl;
    this.shader = shader;
    this.drawLineList = [];
  }

  drawWhenSelected() {
    for (this.#i = 0; this.#i < this.drawLineList.length; this.#i++) {
      if (this.drawLineList[this.#i].isDrawWhenSelected) {
        this.drawLineList.splice(this.#i, 1);
      }
    }
  }

  clear() {
    this.drawLineList = [];
  }

  removeStars() {
    let starFound = false;
    for (this.#i = 0; this.#i < this.drawLineList.length; this.#i++) {
      if ((typeof this.drawLineList[this.#i].sat !== 'undefined' && this.drawLineList[this.#i].sat.type == 'Star') || (typeof this.drawLineList[this.#i].sat2 !== 'undefined' && this.drawLineList[this.#i].sat2.type == 'Star')) {
        this.drawLineList.splice(this.#i, 1);
        starFound = true;
      }
    }
    return starFound;
  }

  create(type, value, color) {
    if (typeof color == 'undefined') color = [1.0, 0, 1.0, 1.0];
    switch (color) {
      case 'r':
        color = [1.0, 0.0, 0.0, 1.0];
        break;
      case 'o':
        color = [1.0, 0.5, 0.0, 1.0];
        break;
      case 'y':
        color = [1.0, 1.0, 0.0, 1.0];
        break;
      case 'g':
        color = [0.0, 1.0, 0.0, 1.0];
        break;
      case 'b':
        color = [0.0, 0.0, 1.0, 1.0];
        break;
      case 'c':
        color = [0.0, 1.0, 1.0, 1.0];
        break;
      case 'p':
        color = [1.0, 0.0, 1.0, 1.0];
        break;
      case 'w':
        color = [1.0, 1.0, 1.0, 1.0];
        break;
    }
    if (type == 'sat') {
      let sat = this.#getSat(value);
      this.drawLineList.push({
        line: new Line(this.gl, this.shader),
        sat: sat,
        ref: [0, 0, 0],
        ref2: [sat.position.x, sat.position.y, sat.position.z],
        color: color,
      });
    }
    if (type == 'sat2') {
      let sat = this.#getSat(value[0]);
      this.drawLineList.push({
        line: new Line(this.gl, this.shader),
        sat: sat,
        ref: [value[1], value[2], value[3]],
        ref2: [sat.position.x, sat.position.y, sat.position.z],
        color: color,
      });
    }
    if (type == 'sat3') {
      let sat = this.#getSat(value[0]);
      let sat2 = this.#getSat(value[1]);
      this.drawLineList.push({
        line: new Line(this.gl, this.shader),
        sat: sat,
        sat2: sat2,
        ref: [sat.position.x, sat.position.y, sat.position.z],
        ref2: [sat2.position.x, sat2.position.y, sat2.position.z],
        color: color,
        isOnlyInFOV: true,
        isDrawWhenSelected: false,
      });
    }
    if (type == 'sat4') {
      let sat = this.#getSat(value[0]);
      let sat2 = this.#getSat(value[1]);
      this.drawLineList.push({
        line: new Line(this.gl, this.shader),
        sat: sat,
        sat2: sat2,
        ref: [sat.position.x, sat.position.y, sat.position.z],
        ref2: [sat2.position.x, sat2.position.y, sat2.position.z],
        color: color,
        isOnlyInFOV: true,
        isDrawWhenSelected: true,
      });
    }
    if (type == 'sat5') {
      let sat = this.#getSat(value[0]);
      let sat2 = this.#getSat(value[1]);
      this.drawLineList.push({
        line: new Line(this.gl, this.shader),
        sat: sat,
        sat2: sat2,
        ref: [sat.position.x, sat.position.y, sat.position.z],
        ref2: [sat2.position.x, sat2.position.y, sat2.position.z],
        color: color,
        isOnlyInFOV: false,
        isDrawWhenSelected: false,
      });
    }
    if (type == 'ref') {
      this.drawLineList.push({
        line: new Line(this.gl, this.shader),
        ref: [0, 0, 0],
        ref2: [value[0], value[1], value[2]],
        color: color,
      });
    }
    if (type == 'ref2') {
      this.drawLineList.push({
        line: new Line(this.gl, this.shader),
        ref: [value[0], value[1], value[2]],
        ref2: [value[3], value[4], value[5]],
        color: color,
      });
    }
  }

  updateLineToSat(satId, sensorId) {
    let isLineDrawnToSat = false;
    for (this.#i = 0; this.#i < this.drawLineList.length; this.#i++) {
      if (typeof this.drawLineList[this.#i].sat == 'undefined') continue;

      if (this.drawLineList[this.#i].sat.id == satId) {
        isLineDrawnToSat = true;
      }
    }
    if (!isLineDrawnToSat) {
      this.create('sat4', [satId, sensorId], 'g');
    }
  }

  getLineListLen() {
    return this.drawLineList.length;
  }

  draw() {
    if (this.drawLineList.length == 0) return;
    for (this.#i = 0; this.#i < this.drawLineList.length; this.#i++) {
      if (typeof this.drawLineList[this.#i].sat != 'undefined' && this.drawLineList[this.#i].sat != null && typeof this.drawLineList[this.#i].sat.id != 'undefined') {
        // At least One Satellite
        this.drawLineList[this.#i].sat = this.#getSatPosOnly(this.drawLineList[this.#i].sat.id);
        if (typeof this.drawLineList[this.#i].sat2 != 'undefined' && this.drawLineList[this.#i].sat2 != null) {
          // Satellite and Static
          if (typeof this.drawLineList[this.#i].sat2.name != 'undefined') {
            if (typeof this.drawLineList[this.#i].sat2.id == 'undefined' && this.drawLineList[this.#i].sat2.id != null) {
              this.drawLineList[this.#i].sat2.id = this.#getIdFromSensorName(this.drawLineList[this.#i].sat2.name);
            }
            this.drawLineList[this.#i].sat2 = this.#getSat(this.drawLineList[this.#i].sat2.id);
            if (this.drawLineList[this.#i].isOnlyInFOV && !this.drawLineList[this.#i].sat.getTEARR().inview) {
              this.drawLineList.splice(this.#i, 1);
              continue;
            }
            this.drawLineList[this.#i].line.set(
              [this.drawLineList[this.#i].sat.position.x, this.drawLineList[this.#i].sat.position.y, this.drawLineList[this.#i].sat.position.z],
              [this.drawLineList[this.#i].sat2.position.x, this.drawLineList[this.#i].sat2.position.y, this.drawLineList[this.#i].sat2.position.z]
            );
          } else {
            // Two Satellites
            this.drawLineList[this.#i].sat2 = this.#getSatPosOnly(this.drawLineList[this.#i].sat2.id);
            this.drawLineList[this.#i].line.set(
              [this.drawLineList[this.#i].sat.position.x, this.drawLineList[this.#i].sat.position.y, this.drawLineList[this.#i].sat.position.z],
              [this.drawLineList[this.#i].sat2.position.x, this.drawLineList[this.#i].sat2.position.y, this.drawLineList[this.#i].sat2.position.z]
            );
          }
        } else {
          // Just One Satellite
          this.drawLineList[this.#i].line.set(this.drawLineList[this.#i].ref, [this.drawLineList[this.#i].sat.position.x, this.drawLineList[this.#i].sat.position.y, this.drawLineList[this.#i].sat.position.z]);
        }
      } else if (typeof this.drawLineList[this.#i].star1 != 'undefined' && typeof this.drawLineList[this.#i].star2 != 'undefined' && this.drawLineList[this.#i].star1 != null && this.drawLineList[this.#i].star2 != null) {
        // Constellation
        if (typeof this.drawLineList[this.#i].star1ID == 'undefined') {
          this.drawLineList[this.#i].star1ID = this.#getIdFromStarName(this.drawLineList[this.#i].star1);
        }
        if (typeof this.drawLineList[this.#i].star2ID == 'undefined') {
          this.drawLineList[this.#i].star2ID = this.#getIdFromStarName(this.drawLineList[this.#i].star2);
        }
        this.#tempStar1 = this.#getSatPosOnly(this.drawLineList[this.#i].star1ID);
        this.#tempStar2 = this.#getSatPosOnly(this.drawLineList[this.#i].star2ID);
        this.drawLineList[this.#i].line.set([this.#tempStar1.position.x, this.#tempStar1.position.y, this.#tempStar1.position.z], [this.#tempStar2.position.x, this.#tempStar2.position.y, this.#tempStar2.position.z]);
      } else {
        // Arbitrary Lines
        this.drawLineList[this.#i].line.set(this.drawLineList[this.#i].ref, this.drawLineList[this.#i].ref2);
      }

      this.drawLineList[this.#i].line.draw(this.drawLineList[this.#i].color);
    }
  }
}

export { LineFactory };
