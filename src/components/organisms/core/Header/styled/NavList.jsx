/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { ms } from "styles/theme";

/**
 * A flexbox list for navigation links with dynamic spacing.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
