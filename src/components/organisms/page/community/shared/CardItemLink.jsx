/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { A } from "atoms/core/HTMLElements";

/**
 * A component that represents a link for an card item.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
