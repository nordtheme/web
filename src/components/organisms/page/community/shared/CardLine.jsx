/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { Hr } from "atoms/core/html-elements";

/**
 * A component that represents a horizontal line of a card component.
 * @since 0.7.0
 */
const CardLine = styled(Hr)`
  ${({ theme }) => theme.media.tabletPortrait`
    grid-row: 3;
    grid-column: 1 / span 2;
  `};
`;

export default CardLine;
