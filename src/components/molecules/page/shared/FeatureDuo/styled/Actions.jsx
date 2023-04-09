/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { ms } from "styles/theme";

/**
 * The container for action components like buttons.
 * @since 0.6.0
 */
const Actions = styled.div`
  > * {
    font-size: ${ms(1)};
    margin: 0.4em 0.25em;
  }

  > :first-child {
    margin-left: 0;
  }

  > :last-child {
    margin-right: 0;
  }
`;

export default Actions;
