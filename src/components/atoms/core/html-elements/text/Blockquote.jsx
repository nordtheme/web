/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";
import { rgba } from "polished";

import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const borderLeftColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.nord10, 0.6),
  [MODE_DARK_NIGHT_FROST]: rgba(colors.nord8, 0.6),
});

const fontColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.font.faded[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.font.faded[MODE_DARK_NIGHT_FROST],
});

/**
 * A base HTML component that represents the `<blockquote>` element to indicate that the enclosed text is an extended
 * quotation.
 * It is used in combination with the `Cite` (`<cite>`) and `Q` (`<q>`) components.
 * @since 0.10.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q
 */
const Blockquote = styled.blockquote`
  border-left: 0.2em solid ${borderLeftColor};
  padding-left: 1.5em;
  margin: 1em 0;
  color: ${fontColor};
  transition: border-left ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out,
    color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

export default Blockquote;
