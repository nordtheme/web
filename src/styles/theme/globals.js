/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { css } from "styled-components";

import colors from "./colors";
import { speed } from "./motion";
import typography from "./typography";
import { themedMode } from "./utils";
import { MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "./constants";

const baseBackgroundColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.background.base[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.background.base[MODE_DARK_NIGHT_FROST],
});

const baseFontColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.font.base[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.font.base[MODE_DARK_NIGHT_FROST],
});

const globals = css`
  html {
    font-size: ${typography.sizes.root}px;
  }

  body {
    font-family: ${typography.typefaces.main};
    font-size: ${typography.sizes.msBase}rem;
    font-weight: ${typography.sizes.weight};
    line-height: ${typography.sizes.lineHeight};
    color: ${baseFontColor};
    background-color: ${baseBackgroundColor};
    transition: color ${speed.duration.transition.base.themeModeSwitch}ms ease-in-out,
      background-color ${speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
    scroll-behavior: smooth;
  }
`;

/**
 * Global CSS styles.
 * @since 0.2.0
 */
export default globals;
