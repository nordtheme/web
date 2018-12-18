/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import { darken, rgba } from "polished";

import { MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "../constants";
import nord from "./nord";

const minimal = {
  [MODE_BRIGHT_SNOW_FLURRY]: rgba(nord.nord4, 0.15),
  [MODE_DARK_NIGHT_FROST]: rgba(darken(0.045, nord.nord0), 0.15)
};

const decent = {
  [MODE_BRIGHT_SNOW_FLURRY]: darken(0.05, minimal[MODE_BRIGHT_SNOW_FLURRY]),
  [MODE_DARK_NIGHT_FROST]: darken(0.05, minimal[MODE_DARK_NIGHT_FROST])
};

const base = {
  [MODE_BRIGHT_SNOW_FLURRY]: darken(0.05, decent[MODE_BRIGHT_SNOW_FLURRY]),
  [MODE_DARK_NIGHT_FROST]: darken(0.05, decent[MODE_DARK_NIGHT_FROST])
};

/**
 * Provides theme shadow colors.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
const shadow = {
  base,
  decent,
  minimal
};

export default shadow;
