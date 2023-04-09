/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { ReactComponent as VectorDesignCollageSvg } from "assets/images/decorations/vector-design-collage.svg";

import { decorationBaseStyles, decorationSectionColorSwatchFillColor } from "../../shared/styles";

/**
 * A vector decoration component that renders a vector design collage.
 * @since 0.6.0
 */
const VectorDesignCollage = styled(VectorDesignCollageSvg)`
  ${decorationBaseStyles};
  fill: ${decorationSectionColorSwatchFillColor};
  width: 14em;
  bottom: 12%;
  left: 20%;

  ${({ theme }) => theme.media.desktop`
    width: 16em;
    bottom: 15%;
  `};

  ${({ theme }) => theme.media.desktopPlus`
    width: 18em;
    left: 25%;
  `};
`;

export default VectorDesignCollage;
