/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { motion } from "styles/theme";

/**
 * A component that represents the tag of an card item.
 * @since 0.8.0
 */
const CardItemTag = styled.div`
  display: inline-flex;
  padding: 0 0.4em;
  margin-top: 1em;
  font-size: 0.75em;
  font-style: italic;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ accentColor }) => accentColor};
  border-radius: 4px;
  transition: background-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out,
    color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;

  ${({ theme }) => theme.media.tabletPortrait`
    margin-top: unset;
  `};
`;

export default CardItemTag;
