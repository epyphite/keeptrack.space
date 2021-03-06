/**
 * /*
 * // /////////////////////////////////////////////////////////////////////////////
 *
 * Copyright (C) 2016-2020 Theodore Kruczek
 * Copyright (C) 2020 Heather Kruczek
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * // /////////////////////////////////////////////////////////////////////////////
 */

// This file should contain all of the webgl code for generating non .obj meshes
import { Atmosphere } from './atmosphere.js';
import { LineFactory } from './line-factory.js';
import { Moon } from './moon.js';
import { earth } from './earth.js';
import { sun } from './sun.js';

const sceneManager = {
  classes: {
    Atmosphere: Atmosphere,
    Moon: Moon,
  },
  earth: earth,
  sun: sun,
};

export { LineFactory, sceneManager };
