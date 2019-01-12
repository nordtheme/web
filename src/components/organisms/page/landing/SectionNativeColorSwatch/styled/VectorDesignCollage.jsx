/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { ReactComponent as VectorDesignCollageSvg } from "assets/images/decorations/vector-design-collage.svg";

import { decorationBaseStyles, decorationSectionColorSwatchFillColor } from "../../shared/styles";

/**
 * A vector decoration component that renders a vector design collage.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
