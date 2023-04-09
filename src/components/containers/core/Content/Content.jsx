/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";
import { em } from "polished";

/**
 * A container that manages the responsive content width.
 * The boolean `centered` prop can be used to use a centered margin.
 * @since 0.3.0
 */
const Content = styled.div`
  width: 100%;
  margin: ${({ centered }) => centered && "0 auto"};
  padding: 0 1.5em;

  ${({ theme }) => theme.media.desktop`
    max-width: ${em(theme.media.breakpoints.desktopLowerBoundary)};
    padding: unset;
  `};
`;

export default Content;
