/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { colors, motion, themedMode, typography, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

import { Pre } from "../text";

const backgroundColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord6,
  [MODE_DARK_NIGHT_FROST]: colors.nord1
});

/**
 * A base HTML component that represents the `<code>` element to render short fragments of computer code.
 * The actual text is rendered as base HTML element `<pre>` that is represented through the `Pre` component.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.6.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre
 */
const Code = styled.code`
  font-family: ${typography.typefaces.monospace};
  font-weight: 500;
  font-size: 0.85em;
  padding: 0.2em 0.4em;
  background-color: ${backgroundColor};
  border-radius: 4px;
  transition: background-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;

  ${Pre} & {
    display: block;
    padding: 1em;
    font-size: 0.9375em;
  }
`;

export default Code;
