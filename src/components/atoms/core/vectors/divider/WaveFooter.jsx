/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { css } from "styled-components";
import { darken, lighten } from "polished";

import { colors, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

import { themeModeFillColorStyles } from "../shared/styles";
import DividerSvg from "./DividerSvg";

const fillColorWave1 = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: lighten(0.025, colors.nord6),
  [MODE_DARK_NIGHT_FROST]: darken(0.02, colors.nord1),
});

const fillColorWave2 = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: lighten(0.035, colors.nord6),
  [MODE_DARK_NIGHT_FROST]: darken(0.01, colors.nord1),
});

const fillColorWave3 = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.background.sectioning.primary[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.background.sectioning.primary[MODE_DARK_NIGHT_FROST],
});

/**
 * A SVG vector graphic divider component consisting of three overlapping waves.
 * @since 0.5.0
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG
 */
const WaveFooter = (props) => (
  <DividerSvg {...props} viewBox="0 0 1920 250" xmlns="http://www.w3.org/2000/svg">
    <path
      css={css`
        ${themeModeFillColorStyles};
        fill: ${fillColorWave1};
      `}
      d="M1920 250H0V0s126.707 78.536 349.975 80.05c177.852 1.203 362.805-63.874 553.803-63.874 290.517 0 383.458 57.712 603.992 61.408 220.527 3.696 278.059-61.408 412.23-17.239"
    />
    <path
      css={css`
        ${themeModeFillColorStyles};
        fill: ${fillColorWave2};
      `}
      d="M1920 144s-467.917 116.857-1027.243-17.294C369.986 1.322 0 45.578 0 45.578V250h1920V144z"
    />
    <path
      css={css`
        ${themeModeFillColorStyles};
        fill: ${fillColorWave3};
      `}
      d="M0 195.553s208.547-75.581 701.325-20.768c376.707 41.908 520.834-67.962 722.545-67.962 222.926 0 311.553 83.523 496.129 86.394V250H0v-54.447z"
    />
  </DividerSvg>
);

export default WaveFooter;
