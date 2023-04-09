/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * A responsive grid for chat card components.
 * @since 0.7.0
 */
const Grid = styled.div`
  display: grid;
  grid-gap: 4em;

  ${({ theme }) => theme.media.tabletLandscape`
    grid-template-columns: repeat(2, 1fr);
  `};
`;

export default Grid;
