/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file The global theme.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.2.0
 */

import colors, { nord, palettes } from "./colors";
import globals from "./globals";
import motion from "./motion";
import normalize from "./normalize";
import { generateMediaQuery, themedMode, themedModeVariant } from "./utils";
import typography from "./typography";
import { MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST, THEME_KEY_MODE } from "./constants";

const theme = { colors, motion, typography };

export {
  colors,
  generateMediaQuery,
  globals,
  motion,
  nord,
  normalize,
  palettes,
  themedMode,
  themedModeVariant,
  typography,
  MODE_BRIGHT_SNOW_FLURRY,
  MODE_DARK_NIGHT_FROST,
  THEME_KEY_MODE
};

export default theme;
