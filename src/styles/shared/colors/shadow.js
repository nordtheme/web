/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { css } from "styled-components";
import { rgba } from "polished";

import { colors, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const dropShadowColorAmbientLight = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.shadow.base[MODE_BRIGHT_SNOW_FLURRY], 0.1),
  [MODE_DARK_NIGHT_FROST]: rgba(colors.shadow.base[MODE_DARK_NIGHT_FROST], 0.1),
});

const dropShadowColorDirectLight = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.shadow.base[MODE_BRIGHT_SNOW_FLURRY], 0.25),
  [MODE_DARK_NIGHT_FROST]: rgba(colors.shadow.base[MODE_DARK_NIGHT_FROST], 0.25),
});

const mixinDropShadowAmbientLight = (offsetX = 0, offsetY = 5, blurRadius = 7) =>
  css`
    ${offsetX}px ${offsetY}px ${blurRadius}px ${dropShadowColorAmbientLight}
  `;

const mixinDropShadowAmbientLightHover = (offsetX = 0, offsetY = 9, blurRadius = 11) =>
  css`
    ${offsetX}px ${offsetY}px ${blurRadius}px ${dropShadowColorAmbientLight}
  `;

const mixinDropShadowDirectLight = (offsetX = 0, offsetY = 4, blurRadius = 6) =>
  css`
    ${offsetX}px ${offsetY}px ${blurRadius}px ${dropShadowColorDirectLight}
  `;

const mixinDropShadowDirectLightHover = (offsetX = 0, offsetY = 8, blurRadius = 10) =>
  css`
    ${offsetX}px ${offsetY}px ${blurRadius}px ${dropShadowColorDirectLight}
  `;

/**
 * Provides shared theme mode shadow color styles for all components.
 * @since 0.10.0
 */
export {
  dropShadowColorAmbientLight,
  dropShadowColorDirectLight,
  mixinDropShadowAmbientLight,
  mixinDropShadowAmbientLightHover,
  mixinDropShadowDirectLight,
  mixinDropShadowDirectLightHover,
};
