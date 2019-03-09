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
  [MODE_DARK_NIGHT_FROST]: colors.nord4
});

const backgroundColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord6,
  [MODE_DARK_NIGHT_FROST]: colors.nord3
});

const backgroundColorHover = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord5,
  [MODE_DARK_NIGHT_FROST]: colors.nord2
});

/**
 * A base HTML component that represents the `<input>` element to create interactive controls for web-based forms in
 * order to accept data from the user.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
 */
const Input = styled.input`
  &[type="checkbox"] {
    appearance: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 1em;
    width: 1em;
    margin-right: 0.5em;
    position: relative;
    vertical-align: middle;
    border-radius: 4px;
    background-color: ${backgroundColor};
    transition: background-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;

    &:active,
    &:focus {
      outline: 0;
    }

    &:before {
      content: "";
      position: absolute;
      display: inline-block;
      width: 1em;
      height: 1em;
      border-radius: 4px;
      transition: background-color ${motion.speed.duration.transition.area.medium}ms ease-in-out;
    }

    &:hover {
      &:before {
        background-color: ${backgroundColorHover};
      }
    }

    &:checked {
       &:after {
         content: "✔";
         position: absolute;
         display: inline-block;
         color: ${fontColor};
       }
    }
`;

export default Input;
