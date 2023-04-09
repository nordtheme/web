/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { ReactComponent as NordicBackpackSvg } from "assets/images/decorations/nordic-backpack.svg";

import { decorationBaseStyles, decorationSectionColorPaletteModularityFillColor } from "../../shared/styles";

/**
 * A vector decoration component that renders a nordic backpack.
 * @since 0.6.0
 */
const NordicBackpack = styled(NordicBackpackSvg)`
  ${decorationBaseStyles};
  fill: ${decorationSectionColorPaletteModularityFillColor};
  width: 2.5em;
  bottom: 6%;
  right: 6%;

  ${({ theme }) => theme.media.phoneLandscape`
    width: 3em;
    bottom: 10%;
    right: 10%;
  `};

  ${({ theme }) => theme.media.tabletPortrait`
    width: 4em;
  `};

  ${({ theme }) => theme.media.tabletLandscape`
    width: 4.5em;
    right: unset;
    left: 28%;
    bottom: 25%;
  `};

  ${({ theme }) => theme.media.desktop`
    width: 5em;
    bottom: 30%;
    left: 34%;
  `};
`;

export default NordicBackpack;
