/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * The grid container for blog post cards.
 * @since 0.10.0
 */
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.5em;
  max-width: 100%;

  ${({ theme }) => theme.media.tabletPortrait`
    grid-template-columns: repeat(2, 1fr);
  `};

  ${({ theme }) => theme.media.tabletLandscape`
    grid-template-columns: repeat(3, 1fr);
  `};
`;

export default Grid;
