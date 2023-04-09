/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import breakpoints from "./breakpoints";
import colors, { nord, palettes } from "./colors";
import globals from "./globals";
import media from "./media";
import motion from "./motion";
import normalize from "./normalize";
import { generateMediaQuery, ms, themedMode, themedModeVariant, zIndexFor } from "./utils";
import typography from "./typography";
import { MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST, THEME_KEY_MODE, Z_INDEX_ELEMENTS, Z_INDEX_ELEMENT_ORDER } from "./constants";

const theme = { breakpoints, colors, media, motion, typography };

/**
 * @file The global theme.
 * @since 0.2.0
 */

export {
  colors,
  generateMediaQuery,
  globals,
  media,
  motion,
  ms,
  nord,
  normalize,
  palettes,
  themedMode,
  themedModeVariant,
  typography,
  zIndexFor,
  MODE_BRIGHT_SNOW_FLURRY,
  MODE_DARK_NIGHT_FROST,
  THEME_KEY_MODE,
  Z_INDEX_ELEMENTS,
  Z_INDEX_ELEMENT_ORDER,
};
export default theme;
