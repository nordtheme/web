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
 * The sub-container for visualization content.
 * To swap the order within the main container the `reverseRowOrder` boolean prop can be passed
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.6.0
 */
const Visualization = styled.div`
  width: 100%;
  order: ${({ reverseRowOrder }) => (reverseRowOrder ? 0 : 1)};

  ${({ theme }) => theme.media.phoneLandscape`
    width: 80%;
  `};

  ${({ theme, reverseRowOrder }) => theme.media.tabletLandscape`
    width: 100%;
    order: ${reverseRowOrder ? 1 : 0};
  `};
`;

export default Visualization;
