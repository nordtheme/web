/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import BaseDecorationCanvas from "../../../shared/DecorationCanvas";

/**
 * A container for absolute positioned decoration components.
 * @since 0.6.0
 */
const DecorationCanvas = styled(BaseDecorationCanvas)`
  display: none;

  ${({ theme }) => theme.media.tabletLandscape`
    display: unset;
  `};
`;

export default DecorationCanvas;
