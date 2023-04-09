/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * A container component for an card item action.
 * @since 0.7.0
 */
const CardAction = styled.div`
  > a {
    white-space: normal;
  }

  ${({ theme }) => theme.media.tabletPortrait`
    grid-column: 2;
  `};
`;

export default CardAction;
