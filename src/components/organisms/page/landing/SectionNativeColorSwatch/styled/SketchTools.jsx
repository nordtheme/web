/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { ReactComponent as VectorDesignSketchToolsSvg } from "assets/images/decorations/vector-design-sketch-tools.svg";

import { decorationBaseStyles, decorationSectionColorSwatchFillColor } from "../../shared/styles";

/**
 * A vector decoration component that renders vector design sketch tools.
 * @since 0.6.0
 */
const SketchTools = styled(VectorDesignSketchToolsSvg)`
  ${decorationBaseStyles};
  fill: ${decorationSectionColorSwatchFillColor};
  width: 4em;
  top: 11%;
  left: 6%;

  ${({ theme }) => theme.media.desktop`
    width: 5em;
  `};

  ${({ theme }) => theme.media.desktopPlus`
    width: 6em;
  `};
`;

export default SketchTools;
