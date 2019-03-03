/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import BaseDecorationCanvas from "../../../shared/DecorationCanvas";

/**
 * A container for absolute positioned decoration components.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.6.0
 */
const DecorationCanvas = styled(BaseDecorationCanvas)`
  display: none;

  ${({ theme }) => theme.media.tabletLandscape`
    display: unset;
  `};
`;

export default DecorationCanvas;
