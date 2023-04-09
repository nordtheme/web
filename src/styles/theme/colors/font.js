/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { darken, lighten } from "polished";

import nord from "./nord";
import { MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "../constants";

const base = {
  [MODE_BRIGHT_SNOW_FLURRY]: nord.nord3,
  [MODE_DARK_NIGHT_FROST]: nord.nord6,
};

const faded = {
  [MODE_BRIGHT_SNOW_FLURRY]: lighten(0.2, base[MODE_BRIGHT_SNOW_FLURRY]),
  [MODE_DARK_NIGHT_FROST]: darken(0.2, base[MODE_DARK_NIGHT_FROST]),
};

const font = { base, faded };

/**
 * Provides theme font colors.
 * @since 0.2.0
 */
export default font;
