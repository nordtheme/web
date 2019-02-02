/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import BaseCard from "./BaseCard";

/**
 * A styled card component.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.8.0
 */
const Card = styled(BaseCard)`
  ${({ theme }) => theme.media.tabletPortrait`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 2em;
    text-align: start;
  `};
`;

export default Card;
