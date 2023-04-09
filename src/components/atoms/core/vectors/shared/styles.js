/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { css } from "styled-components";

import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const themeModeColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.font.base[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.font.base[MODE_DARK_NIGHT_FROST],
});

/**
 * The value and transition for the fill color based on the active global theme mode.
 * @since 0.3.0
 */
const themeModeFillColorStyles = css`
  fill: ${themeModeColor};
  transition: fill ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

/**
 * The value and transition for the stroke color based on the active global theme mode.
 * @since 0.8.0
 */
const themeModeStrokeColorStyles = css`
  stroke: ${themeModeColor};
  transition: stroke ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

/**
 * @file Provides shared vector graphic component styles.
 * @since 0.3.0
 */
export { themeModeFillColorStyles, themeModeStrokeColorStyles };
