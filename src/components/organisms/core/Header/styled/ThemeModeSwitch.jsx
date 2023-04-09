/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";
import { stripUnit } from "polished";

import { motion, ms } from "styles/theme";

import { linkBackgroundColorHoverVariants } from "../shared/styles";

/**
 * A button to toggle between the global theme modes.
 * @since 0.3.0
 */
const ThemeModeSwitch = styled.button`
  user-select: none;
  padding: 1em;
  cursor: pointer;
  pointer-events: auto;
  border: 0;
  border-radius: 0.25em;
  background-color: transparent;
  transition: background-color ${motion.speed.duration.transition.area.small}ms ease-in-out;
  margin-left: 0.5em;
  position: relative;
  overflow: hidden;

  &:active,
  &:focus,
  &:hover {
    outline: 0;
  }

  &:hover:not(:disabled) {
    background-color: ${({ variant }) => linkBackgroundColorHoverVariants[variant]};
  }

  > * {
    width: ${ms(1)};
    height: ${ms(1)};
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: ${stripUnit(ms(1)) / -2}em;
    margin-left: ${stripUnit(ms(1)) / -2}em;
  }
`;

export default ThemeModeSwitch;
