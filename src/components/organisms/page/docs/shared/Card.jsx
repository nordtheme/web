/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import BaseCard from "./BaseCard";

/**
 * A styled card component.
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
