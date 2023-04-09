/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * A wrapper component for card item content.
 * @since 0.8.0
 */
const CardItemContent = styled.div`
  ${({ theme }) => theme.media.tabletPortrait`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `};
`;

export default CardItemContent;
