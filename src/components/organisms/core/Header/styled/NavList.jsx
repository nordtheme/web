/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { ms } from "styles/theme";

/**
 * A flexbox list for navigation links with dynamic spacing.
 * @since 0.3.0
 */
const NavList = styled.div`
  display: none;
  justify-content: space-between;
  font-size: ${ms(1)};

  * {
    margin: 0 0.556em;

    &:last-child {
      margin-right: 0;
    }

    &:first-child {
      margin-left: 0;
    }
  }

  ${({ theme }) => theme.media.tabletPortrait`
    display: flex;
  `};
`;

export default NavList;
