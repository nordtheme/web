/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

/**
 * A footer container that defines the grid layout.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.5.0
 */
const Grid = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.tabletPortrait`
    display: grid;
    grid-template-columns: repeat(${({ categoryCount }) => categoryCount}, 1fr);
    grid-template-rows: auto;
    grid-row-gap: 1em;
  `};

  ${({ theme }) => theme.media.tabletLandscape`
    grid-template-columns: 30% repeat(${({ categoryCount }) => categoryCount}, 1fr);
  `};
`;

export default Grid;
