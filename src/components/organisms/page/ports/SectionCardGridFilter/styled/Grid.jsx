/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * The grid for port project cards.
 * @since 0.9.0
 */
const Grid = styled.div`
  display: grid;
  grid-gap: 2em;
  width: 100%;
  grid-template-columns: repeat(1, 0.5fr);
  justify-content: center;

  ${({ theme }) => theme.media.phoneLandscape`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${({ theme }) => theme.media.tabletPortrait`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${({ theme }) => theme.media.tabletLandscape`
    grid-template-columns: repeat(4, 1fr);
  `}

  ${({ theme }) => theme.media.desktop`
    grid-template-columns: repeat(5, 1fr);
    padding: 0 3.2em;
  `}
`;

export default Grid;
