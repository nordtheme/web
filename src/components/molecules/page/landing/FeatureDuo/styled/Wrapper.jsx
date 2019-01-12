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
 * The main wrapper component for both sub-containers.
 * The dynamic vertical layout change can be disabled by passing the `verticalOnly` boolean prop.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.6.0
 */
const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 4em;
  justify-items: center;

  ${({ theme, verticalOnly }) => theme.media.tabletLandscape`
    grid-template-columns: ${!verticalOnly && "repeat(2, 1fr)"};
    grid-column-gap: 2em;
    align-items: center;
    grid-row-gap: 8em;
  `};
`;

export default Wrapper;
