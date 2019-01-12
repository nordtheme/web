/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides multiple styles for the `ColorPaletteCard` component.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.6.0
 */

import { rgba } from "polished";

import { colors, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const floatingLineColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.nord4, 0.8),
  [MODE_DARK_NIGHT_FROST]: rgba(colors.nord4, 0.5)
});

const dropShadowColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.shadow.base[MODE_BRIGHT_SNOW_FLURRY], 0.35),
  [MODE_DARK_NIGHT_FROST]: rgba(colors.shadow.base[MODE_DARK_NIGHT_FROST], 0.2)
});

const fontColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord3,
  [MODE_DARK_NIGHT_FROST]: colors.nord4
});

export { dropShadowColor, floatingLineColor, fontColor };
