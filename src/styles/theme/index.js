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

import breakpoints from "./breakpoints";
import colors, { nord, palettes } from "./colors";
import globals from "./globals";
import media from "./media";
import motion from "./motion";
import normalize from "./normalize";
import { generateMediaQuery, ms, themedMode, themedModeVariant, zIndexFor } from "./utils";
import typography from "./typography";
import {
  MODE_BRIGHT_SNOW_FLURRY,
  MODE_DARK_NIGHT_FROST,
  THEME_KEY_MODE,
  Z_INDEX_ELEMENTS,
  Z_INDEX_ELEMENT_ORDER
} from "./constants";

const theme = { breakpoints, colors, media, motion, typography };

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
  Z_INDEX_ELEMENT_ORDER
};

export default theme;
