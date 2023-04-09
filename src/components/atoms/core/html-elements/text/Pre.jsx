/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const backgroundColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord6,
  [MODE_DARK_NIGHT_FROST]: colors.nord1,
});

/**
 * A base HTML component that represents the `<pre>` element to render preformatted text using a non-proportional "monspace" font.
 * It is related to and commonly used with a `<code>` element that is represented by the `Code` component.
 * @since 0.6.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code
 */
const Pre = styled.pre`
  background-color: ${backgroundColor};
  overflow: auto;
  white-space: pre;
  border-radius: 8px;
  transition: background-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

export default Pre;
