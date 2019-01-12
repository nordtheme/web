/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { ReactComponent as MapPathMarkerSvg } from "assets/images/decorations/map-path-marker.svg";

import { decorationBaseStyles, decorationSectionColorPaletteModularityFillColor } from "../../shared/styles";

/**
 * A vector decoration component that renders a map path marker.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
