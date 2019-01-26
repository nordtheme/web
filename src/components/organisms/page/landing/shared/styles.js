/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides shared styles for the landing page section components.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.6.0
 */

import { css } from "styled-components";
import { rgba } from "polished";

import {
  colors,
  motion,
  themedMode,
  zIndexFor,
  MODE_BRIGHT_SNOW_FLURRY,
  MODE_DARK_NIGHT_FROST,
  Z_INDEX_ELEMENTS
} from "styles/theme";

const darkenedThemeModeBackgroundbackgroundColor = themedMode({
  [MODE_DARK_NIGHT_FROST]: colors.background.sectioning.tertiary[MODE_DARK_NIGHT_FROST]
});

const decorationBaseStyles = css`
  position: absolute;
  z-index: ${zIndexFor(Z_INDEX_ELEMENTS.DECORATIONS)};
  transition: fill ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

const decorationSectionColorPaletteModularityFillColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord5,
  [MODE_DARK_NIGHT_FROST]: colors.nord1
});

const decorationSectionHeroFillColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.nord6, 0.4),
  [MODE_DARK_NIGHT_FROST]: colors.nord1
});

const decorationSectionColorSwatchFillColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord6,
  [MODE_DARK_NIGHT_FROST]: colors.nord2
});

export {
  darkenedThemeModeBackgroundbackgroundColor,
  decorationBaseStyles,
  decorationSectionColorPaletteModularityFillColor,
  decorationSectionColorSwatchFillColor,
  decorationSectionHeroFillColor
};
