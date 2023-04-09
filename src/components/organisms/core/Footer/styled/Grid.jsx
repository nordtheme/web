/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * A footer container that defines the grid layout.
 * @since 0.5.0
 */
const Grid = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.tabletPortrait`
    display: grid;
    grid-template-columns: repeat(${({ categoryCount }) => categoryCount}, 1fr);
    grid-template-rows: auto;
    grid-row-gap: 1em;
  `};

  ${({ theme }) => theme.media.tabletLandscape`
    grid-template-columns: 30% repeat(${({ categoryCount }) => categoryCount}, 1fr);
  `};
`;

export default Grid;
