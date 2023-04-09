/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { css } from "styled-components";
import { lighten, rgba } from "polished";

import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const backgroundColorHover = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.nord6, 0.45),
  [MODE_DARK_NIGHT_FROST]: rgba(colors.nord3, 0.8),
});

const fontColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord10,
  [MODE_DARK_NIGHT_FROST]: colors.nord8,
});

const fontColorDecent = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord0,
  [MODE_DARK_NIGHT_FROST]: lighten(0.2, colors.font.base[MODE_DARK_NIGHT_FROST]),
});

const fontColorHover = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord10,
});

const fontColorHoverMinimal = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord0,
  [MODE_DARK_NIGHT_FROST]: lighten(0.2, colors.font.base[MODE_DARK_NIGHT_FROST]),
});

const calmly = css`
  border-radius: 0.25em;
  color: ${fontColor};
  transition: color ${motion.speed.duration.transition.text.fade}ms ease-in-out, background-color ${motion.speed.duration.transition.text.fade}ms ease-in-out;

  &:hover,
  &:active,
  &:focus {
    background-color: ${backgroundColorHover};
    color: ${fontColorHover};
  }
`;

const decent = css`
  border-bottom: 1px solid ${fontColor};
  color: ${fontColorDecent};
  transition: color ${motion.speed.duration.transition.text.fade}ms ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: ${fontColor};
  }
`;

const minimal = css`
  border-bottom: 1px solid ${fontColor};
  transition: border-bottom-color ${motion.speed.duration.transition.text.fade}ms ease-in-out;

  &:hover,
  &:active,
  &:focus {
    border-bottom-color: ${fontColorHoverMinimal};
  }
`;

/**
 * Provides multiple styles for the `Link` component.
 * @since 0.5.0
 */
export { calmly, decent, minimal };
