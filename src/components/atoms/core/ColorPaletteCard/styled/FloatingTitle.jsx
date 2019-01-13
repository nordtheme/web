/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { motion } from "styles/theme";

import { floatingLineColor, fontColor } from "../shared/styles";

/**
 * The floating title of the color palette.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
