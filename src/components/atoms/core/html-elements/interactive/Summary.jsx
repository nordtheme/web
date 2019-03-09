/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const fontColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.font.base[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.font.base[MODE_DARK_NIGHT_FROST]
});

const fontColorHover = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord10,
  [MODE_DARK_NIGHT_FROST]: colors.nord8
});

const backgroundColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord6,
  [MODE_DARK_NIGHT_FROST]: colors.nord3
});

/**
 * A base HTML component that represents the `<summary>` element that specifies a summary, caption, or legend for a
 * `<details>` (`Details` component) element's disclosure box.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary
 */
const Summary = styled.summary`
  cursor: pointer;
  padding-left: 1em;
  transition: all ${motion.speed.duration.transition.area.medium}ms ease-in-out;
  border-radius: 4px;
  margin-left: 1em;
  margin-bottom: 1em;
  display: inline-block;

  &:focus,
  &:active {
    outline: none;
  }

  &:hover {
    color: ${fontColorHover};
    text-decoration: underline;
  }

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: "›";
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    left: 0.2em;
    top: 0.25em;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: ${backgroundColor};
    color: ${fontColor};
    font-size: 1em;
    font-weight: 600;
    transition: all 0.25s ease-in-out;
    transform: rotate(-90deg);
  }
`;

export default Summary;
