/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";
import { em } from "polished";

/**
 * A container that manages the responsive content width.
 * The boolean `centered` prop can be used to use a centered margin.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
