/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { motion } from "styles/theme";

import { fontColor } from "../shared/styles";

/**
 * The label for a color code.
 * @since 0.6.0
 */
const Label = styled.div`
  font-size: 0.875em;
  text-transform: uppercase;
  padding: 0.8em 0;
  text-align: center;
  color: ${fontColor};
  transition: color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

export default Label;
