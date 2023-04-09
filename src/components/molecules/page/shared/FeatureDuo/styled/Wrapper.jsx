/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * The main wrapper component for both sub-containers.
 * The dynamic vertical layout change can be disabled by passing the `verticalOnly` boolean prop.
 * @since 0.6.0
 */
const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 4em;
  justify-items: center;

  ${({ columnRatio, theme, verticalOnly }) => theme.media.tabletLandscape`
    grid-template-columns: ${!verticalOnly && `${columnRatio[0]}fr ${columnRatio[1]}fr`};
    grid-column-gap: 2em;
    align-items: center;
    grid-row-gap: 8em;
  `};
`;

export default Wrapper;
