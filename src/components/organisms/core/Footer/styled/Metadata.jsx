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
 * A container for the grid cell that contains metadata components.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.5.0
 */
const Metadata = styled.div`
  display: flex;
  grid-column: span ${({ categoryCount }) => categoryCount};
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.media.tabletLandscape`
    grid-column: unset;
    justify-content: space-between;
    align-items: unset;
  `};
`;

export default Metadata;
