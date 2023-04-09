/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { ReactComponent as MapPathMarkerSvg } from "assets/images/decorations/map-path-marker.svg";

import { decorationBaseStyles, decorationSectionColorPaletteModularityFillColor } from "../../shared/styles";

/**
 * A vector decoration component that renders a map path marker.
 * @since 0.6.0
 */
const MapPathMarker = styled(MapPathMarkerSvg)`
  ${decorationBaseStyles};
  fill: ${decorationSectionColorPaletteModularityFillColor};
  width: 3em;
  right: 6%;
  top: -1%;

  ${({ theme }) => theme.media.phoneLandscape`
    width: 4em;
  `};

  ${({ theme }) => theme.media.tabletPortrait`
    width: 4.5em;
  `};

  ${({ theme }) => theme.media.tabletLandscape`
    width: 5em;
    top: -3%;
  `};

  ${({ theme }) => theme.media.desktop`
    width: 5.5em;
    top: -4%;
    right: unset;
    left: 42%;
  `};
`;

export default MapPathMarker;
