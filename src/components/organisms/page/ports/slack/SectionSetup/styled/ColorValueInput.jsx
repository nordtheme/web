/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

import { fadedColor } from "./styles";

const borderColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord5,
  [MODE_DARK_NIGHT_FROST]: colors.nord3,
});

const inputBackgroundColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.background.sectioning.primary[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.background.sectioning.primary[MODE_DARK_NIGHT_FROST],
});

/**
 * The read-only input component of the setup section.
 * @since 0.21.0
 */
const ColorValueInput = styled.input`
  font-family: ${({ theme }) => theme.typography.typefaces.monospace};
  display: block;
  width: 100%;
  outline: none;
  cursor: default;
  color: ${fadedColor};
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: ${inputBackgroundColor};
  padding: 0.5em 1em 0.5em 2em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: border-color ${motion.speed.duration.transition.area.small}ms ease-in-out,
    color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out,
    background-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;

  ::selection {
    background-color: ${colors.nord8};
    color: ${colors.nord0};
  }

  &:active,
  &:focus {
    border-color: ${borderColor};
  }
`;

export default ColorValueInput;
