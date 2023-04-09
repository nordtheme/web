/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { motion } from "styles/theme";

import { floatingLineColor, fontColor } from "../shared/styles";

/**
 * The floating title of the color palette.
 * @since 0.6.0
 */
const FloatingTitle = styled.span`
  font-size: 1.5em;
  color: ${fontColor};
  text-align: center;
  transition: color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;

  &:after {
    content: "";
    display: block;
    height: 1px;
    background-color: ${floatingLineColor};
    width: 70%;
    margin: 1.2rem auto;
  }
`;

export default FloatingTitle;
