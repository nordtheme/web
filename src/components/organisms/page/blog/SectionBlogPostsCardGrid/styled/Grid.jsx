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
 * The grid container for blog post cards.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 */
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.5em;
  max-width: 100%;

  ${({ theme }) => theme.media.tabletPortrait`
    grid-template-columns: repeat(2, 1fr);
  `};

  ${({ theme }) => theme.media.tabletLandscape`
    grid-template-columns: repeat(3, 1fr);
  `};
`;

export default Grid;
