/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { darken, lighten } from "polished";

import nord from "./nord";
import { MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "../constants";

const base = {
  [MODE_BRIGHT_SNOW_FLURRY]: "#fff",
  [MODE_DARK_NIGHT_FROST]: nord.nord0,
};

const sectioningPrimary = {
  [MODE_BRIGHT_SNOW_FLURRY]: lighten(0.045, nord.nord6),
  [MODE_DARK_NIGHT_FROST]: nord.nord1,
};

const sectioningSecondary = {
  [MODE_BRIGHT_SNOW_FLURRY]: lighten(0.06, nord.nord5),
  [MODE_DARK_NIGHT_FROST]: darken(0.025, nord.nord0),
};

/**
 * A darkened background color for landing page section components.
 * @since 0.6.0
 */
const tertiarySecondary = {
  [MODE_BRIGHT_SNOW_FLURRY]: lighten(0.08, nord.nord4),
  [MODE_DARK_NIGHT_FROST]: darken(0.045, nord.nord0),
};

/**
 * Provides theme background colors.
 * @since 0.2.0
 */
const background = {
  base,
  sectioning: {
    primary: sectioningPrimary,
    secondary: sectioningSecondary,
    tertiary: tertiarySecondary,
  },
};

export default background;
