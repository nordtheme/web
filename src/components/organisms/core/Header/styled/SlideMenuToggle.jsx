/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { motion, ms } from "styles/theme";

import { linkBackgroundColorHoverVariants } from "../shared/styles";

/**
 * A button to toggle the navigation link slide menu.
 * @since 0.3.0
 */
const SlideMenuToggle = styled.button`
  user-select: none;
  cursor: pointer;
  pointer-events: auto;
  border: 0;
  border-radius: 0.25em;
  background-color: transparent;
  transition: background-color ${motion.speed.duration.transition.area.small}ms ease-in-out;

  &:active,
  &:focus,
  &:hover {
    outline: 0;
  }

  &:hover:not(:disabled) {
    background-color: ${({ variant }) => linkBackgroundColorHoverVariants[variant]};
  }

  > * {
    width: ${ms(3)};
    height: ${ms(3)};
    vertical-align: middle;
  }

  ${({ theme }) => theme.media.tabletPortrait`
    display: none;
  `};
`;

export default SlideMenuToggle;
