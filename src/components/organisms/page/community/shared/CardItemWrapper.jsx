/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * A wrapper component for a card item.
 * @since 0.7.0
 */
const CardItemWrapper = styled.div`
  margin: 1.4em 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${({ theme }) => theme.media.tabletPortrait`
    display: flex;
  `};
`;

export default CardItemWrapper;
