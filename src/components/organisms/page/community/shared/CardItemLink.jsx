/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { A } from "atoms/core/html-elements";

/**
 * A component that represents a link for an card item.
 * @since 0.7.0
 */
const CardItemLink = styled(A)`
  font-weight: 500;
  display: block;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => theme.media.tabletPortrait`
    white-space: nowrap;
  `};
`;

export default CardItemLink;
