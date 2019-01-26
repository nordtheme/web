/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { Hr } from "atoms/core/HTMLElements";

/**
 * A component that represents a horizontal line of a card component.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.7.0
 */
const CardLine = styled(Hr)`
  ${({ theme }) => theme.media.tabletPortrait`
    grid-row: 3;
    grid-column: 1 / span 2;
  `};
`;

export default CardLine;
