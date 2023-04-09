/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";
import { darken, lighten, rgba } from "polished";

import { colors, motion, themedMode, typography, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const fontColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.font.base[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.font.base[MODE_DARK_NIGHT_FROST],
});

const backgroundColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.nord6, 0.3),
  [MODE_DARK_NIGHT_FROST]: colors.nord1,
});

const borderColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord4,
  [MODE_DARK_NIGHT_FROST]: colors.nord2,
});

const borderBottomColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: darken(0.1, colors.nord4),
  [MODE_DARK_NIGHT_FROST]: lighten(0.1, colors.nord2),
});

/**
 * A base HTML component that represents the `<kbd>` element to render a span of inline text denoting textual user input from a keyboard, voice input,
 * or any other text entry device.
 * @since 0.10.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd
 */
const Kbd = styled.kbd`
  font-family: ${typography.typefaces.monospace};
  display: inline-block;
  font-size: 0.85em;
  padding: 0.2em 0.4em;
  line-height: 1;
  color: ${fontColor};
  vertical-align: middle;
  background-color: ${backgroundColor};
  border: solid 1px ${borderColor};
  border-bottom-color: ${borderBottomColor};
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 ${borderBottomColor};
  transition: background-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out,
    border ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out,
    box-shadow ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out,
    color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

export default Kbd;
