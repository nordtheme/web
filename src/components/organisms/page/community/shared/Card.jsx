/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import BaseCard from "./BaseCard";

/**
 * A styled card component.
 * @since 0.7.0
 */
const Card = styled(BaseCard)`
  ${({ theme }) => theme.media.tabletPortrait`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-column-gap: 2em;
    text-align: start;
    grid-row: ${({ extended }) => extended && "1 / span 2"};
  `};
`;

export default Card;
