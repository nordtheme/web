/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { A } from "atoms/core/HTMLElements";
import { motion } from "styles/theme";

import { linkBackgroundColorHoverVariants } from "../shared/styles";

/**
 * A navigation link.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
