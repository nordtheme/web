/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * A container for the grid cell that contains metadata components.
 * @since 0.5.0
 */
const Metadata = styled.div`
  display: flex;
  grid-column: span ${({ categoryCount }) => categoryCount};
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.media.tabletLandscape`
    grid-column: unset;
    justify-content: space-between;
    align-items: unset;
  `};
`;

export default Metadata;
