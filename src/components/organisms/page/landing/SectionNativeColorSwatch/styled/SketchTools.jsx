/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { ReactComponent as VectorDesignSketchToolsSvg } from "assets/images/decorations/vector-design-sketch-tools.svg";

import { decorationBaseStyles, decorationSectionColorSwatchFillColor } from "../../shared/styles";

/**
 * A vector decoration component that renders vector design sketch tools.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
