/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Global CSS styles.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.2.0
 */

import { css } from "styled-components";

import colors from "./colors";
import { speed } from "./motion";
import typography from "./typography";
import { themedMode } from "./utils";
import { MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "./constants";

const baseBackgroundColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.background.base[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.background.base[MODE_DARK_NIGHT_FROST]
});

const baseFontColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.font.base[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.font.base[MODE_DARK_NIGHT_FROST]
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

export default globals;
