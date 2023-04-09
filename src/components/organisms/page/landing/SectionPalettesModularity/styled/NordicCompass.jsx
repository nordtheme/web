/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { ReactComponent as NordicCompassSvg } from "assets/images/decorations/nordic-compass.svg";

import { decorationBaseStyles, decorationSectionColorPaletteModularityFillColor } from "../../shared/styles";

/**
 * A vector decoration component that renders a nordic compass.
 * @since 0.6.0
 */
const NordicCompass = styled(NordicCompassSvg)`
  ${decorationBaseStyles};
  fill: ${decorationSectionColorPaletteModularityFillColor};
  width: 3em;
  top: 2%;
  left: 2%;

  ${({ theme }) => theme.media.phoneLandscape`
    width: 3.5em;
  `};

  ${({ theme }) => theme.media.tabletPortrait`
    width: 4.5em;
  `};

  ${({ theme }) => theme.media.tabletLandscape`
    width: 5.5em;
    top: 8%;
    left: 4%;
  `};

  ${({ theme }) => theme.media.desktop`
    width: 6em;
    top: 11%;
    left: 6%;
  `};
`;

export default NordicCompass;
