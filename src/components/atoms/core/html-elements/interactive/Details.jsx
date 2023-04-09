/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

import Summary from "./Summary";

const fontColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord9,
  [MODE_DARK_NIGHT_FROST]: colors.nord8,
});

/**
 * A base HTML component that represents the `<details>` element to create a disclosure widget in which information is visible only when the widget is
 * toggled into an "open" state.
 * It is used in combination with the `Summary` (`<summary>`) component.
 * @since 0.10.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary
 */
const Details = styled.details`
  position: relative;
  margin-bottom: 0.5em;
  list-style: none;
  transition: color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;

  ${Summary} {
    user-select: none;
  }

  &[open] {
    ${Summary} {
      &:before {
        transform: rotate(90deg);
        color: ${fontColor};
      }
    }
  }

  & > :not(${Summary}) {
    margin-left: 2em;
  }
`;

export default Details;
