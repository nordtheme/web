/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { darken, rgba } from "polished";

import { MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "../constants";
import nord from "./nord";

const minimal = {
  [MODE_BRIGHT_SNOW_FLURRY]: rgba(nord.nord4, 0.15),
  [MODE_DARK_NIGHT_FROST]: rgba(darken(0.045, nord.nord0), 0.15),
};

const decent = {
  [MODE_BRIGHT_SNOW_FLURRY]: darken(0.05, minimal[MODE_BRIGHT_SNOW_FLURRY]),
  [MODE_DARK_NIGHT_FROST]: darken(0.05, minimal[MODE_DARK_NIGHT_FROST]),
};

const base = {
  [MODE_BRIGHT_SNOW_FLURRY]: darken(0.05, decent[MODE_BRIGHT_SNOW_FLURRY]),
  [MODE_DARK_NIGHT_FROST]: darken(0.05, decent[MODE_DARK_NIGHT_FROST]),
};

const shadow = {
  base,
  decent,
  minimal,
};

/**
 * Provides theme shadow colors.
 * @since 0.3.0
 */
export default shadow;
