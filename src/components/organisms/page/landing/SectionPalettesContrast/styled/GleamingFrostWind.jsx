/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import CoreGleamingFrostWind from "atoms/core/vectors/decorations/GleamingFrostWind";

import { decorationBaseStyles } from "../../shared/styles";

/**
 * An SVG vector component that renders an animated, gleaming frost wind.
 * @since 0.6.0
 */
const GleamingFrostWind = styled(CoreGleamingFrostWind)`
  ${decorationBaseStyles};
  width: 3em;
  top: 25.5em;
  left: -1em;

  ${({ theme }) => theme.media.phoneLandscape`
    width: 5em;
    top: 18em;
    left: -2em;
  `};

  ${({ theme }) => theme.media.tabletPortrait`
    width: 7em;
    top: 14em;
    left: -2.5em;
  `};

  ${({ theme }) => theme.media.tabletLandscape`
    width: 9em;
    top: -4.5em;
    left: -3.5em;
  `};

  ${({ theme }) => theme.media.desktop`
    width: 12em;
    top: -6.5em;
    left: -4.5em;
  `};

  ${({ theme }) => theme.media.desktopPlus`
    width: 15em;
    top: -8.5em;
    left: -6em;
  `};
`;

export default GleamingFrostWind;
