/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides component styles.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.5.0
 */

import { css } from "styled-components";
import { darken, lighten } from "polished";

import { colors, motion, ms, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const socialNetworkingIconFillColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: lighten(0.15, colors.font.base[MODE_BRIGHT_SNOW_FLURRY]),
  [MODE_DARK_NIGHT_FROST]: darken(0.1, colors.font.base[MODE_DARK_NIGHT_FROST])
});

const socialNetworkingIconStyles = css`
  display: inline-block;
  width: 1em;
  height: 1em;
  fill: ${socialNetworkingIconFillColor};
  transition: fill ${motion.speed.duration.transition.text.fade}ms ease-in-out;

  &:active,
  &:focus,
  &:hover {
    fill: ${colors.nord8};
  }
`;

const heartIconStyles = css`
  width: 0.8em;
  height: 0.8em;
  vertical-align: middle;
  fill: ${({ theme }) => lighten(0.2, theme.colors.nord11)};
`;

const organizationBrandLogoHeight = ms(4);

const organizationBrandCaptionFontSize = ms(3);

const sitemapCategoryFontSize = ms(1);

export {
  heartIconStyles,
  organizationBrandCaptionFontSize,
  organizationBrandLogoHeight,
  sitemapCategoryFontSize,
  socialNetworkingIconStyles
};
