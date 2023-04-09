/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { ms } from "styles/theme";

/**
 * A flexbox list for slide menu navigation links with dynamic spacing.
 * @since 0.3.0
 */
const SlideMenuNavList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: ${ms(1)};

  * {
    margin: 1em;
  }
`;

export default SlideMenuNavList;
