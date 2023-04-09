/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * A configurable and responsive grid for card components.
 * @since 0.8.0
 */
const Grid = styled.div`
  display: grid;
  grid-gap: 4em;

  ${({ theme }) => theme.media.tabletLandscape`
    grid-template-columns: repeat(2, 1fr);
    ${({ isExtended }) => isExtended && "grid-template-rows: repeat(2, auto)"};
  `};
`;

export default Grid;
