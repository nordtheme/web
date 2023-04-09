/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * A container component for card items.
 * @since 0.8.0
 */
const CardItems = styled.div`
  ${({ theme }) => theme.media.tabletPortrait`
    grid-column: 1 / span 2;
  `};
`;

export default CardItems;
