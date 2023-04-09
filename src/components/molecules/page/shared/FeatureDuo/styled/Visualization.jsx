/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * The sub-container for visualization content.
 * To swap the order within the main container the `reverseRowOrder` boolean prop can be passed
 * @since 0.6.0
 */
const Visualization = styled.div`
  width: 100%;
  order: ${({ reverseRowOrder }) => (reverseRowOrder ? 0 : 1)};

  ${({ theme }) => theme.media.phoneLandscape`
    width: 80%;
  `};

  ${({ theme, reverseRowOrder }) => theme.media.tabletLandscape`
    width: 100%;
    order: ${reverseRowOrder ? 1 : 0};
  `};
`;

export default Visualization;
