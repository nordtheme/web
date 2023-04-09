/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { A } from "atoms/core/html-elements";
import { motion } from "styles/theme";

import { linkBackgroundColorHoverVariants } from "../shared/styles";

/**
 * A navigation link.
 * @since 0.3.0
 */
const NavLink = styled(A)`
  border-radius: 0.25em;
  padding: 0.15em 0.5em;
  transition: background-color ${motion.speed.duration.transition.area.small}ms ease-in-out;

  &:active,
  &:focus,
  &:hover {
    background-color: ${({ variant }) => linkBackgroundColorHoverVariants[variant]};
  }
`;

export default NavLink;
