/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import nord from "./nord";

/**
 * The Nord color palettes based on version `0.2.0`.
 * @type {object}
 * @since 0.2.0
 * @see https://github.com/nordtheme/nord/releases/tag/v0.2.0
 */
const palettes = {
  POLAR_NIGHT: {
    nord0: nord.nord0,
    nord1: nord.nord1,
    nord2: nord.nord2,
    nord3: nord.nord3,
  },
  SNOW_STORM: {
    nord4: nord.nord4,
    nord5: nord.nord5,
    nord6: nord.nord6,
  },
  FROST: {
    nord7: nord.nord7,
    nord8: nord.nord8,
    nord9: nord.nord9,
    nord10: nord.nord10,
  },
  AURORA: {
    nord11: nord.nord11,
    nord12: nord.nord12,
    nord13: nord.nord13,
    nord14: nord.nord14,
    nord15: nord.nord15,
  },
};

/**
 * Provides the Nord color palettes until the official library is available.
 * @since 0.2.0
 */
export default palettes;
