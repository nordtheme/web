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
 * A configurable and responsive grid for card components.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.7.0
 */
const Grid = styled.div`
  display: grid;
  grid-gap: 4em;

  ${({ theme }) => theme.media.tabletLandscape`
    grid-template-columns: repeat(2, 1fr);
    ${({ isExtended }) => isExtended && "grid-template-rows: repeat(2, auto)"};
  `};
`;

export default Grid;
