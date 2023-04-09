/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";
import { lighten } from "polished";

import { motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const backgroundColorThemed = (color) =>
  themedMode({
    [MODE_BRIGHT_SNOW_FLURRY]: lighten(0.4, color),
    [MODE_DARK_NIGHT_FROST]: color,
  });

const colorThemed = (color) =>
  themedMode({
    [MODE_BRIGHT_SNOW_FLURRY]: color,
    [MODE_DARK_NIGHT_FROST]: lighten(0.4, color),
  });

/**
 * A component that represents the tag of an Stack Overflow question.
 * @since 0.7.0
 */
const Tag = styled.div`
  display: inline-flex;
  padding: 0 0.4em;
  font-size: 0.75em;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => backgroundColorThemed(color)};
  color: ${({ color }) => colorThemed(color)};
  border-radius: 4px;
  margin: 0 0.25em;
  transition: background-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out,
    color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

export default Tag;
