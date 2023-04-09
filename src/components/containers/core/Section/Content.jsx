/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import CoreContent from "containers/core/Content";

/**
 * A container for content of the `Section` component.
 * @since 0.3.0
 */
const Content = styled(CoreContent)`
  padding-top: ${({ compact }) => !compact && "2.5em"};
  padding-bottom: ${({ compact }) => !compact && "2.5em"};
  position: ${({ decorated }) => decorated && "relative"};

  ${({ theme }) => theme.media.tabletLandscape`
    padding-top: ${({ compact }) => !compact && "5em"};
    padding-bottom: ${({ compact }) => !compact && "5em"};
  `};
`;

export default Content;
