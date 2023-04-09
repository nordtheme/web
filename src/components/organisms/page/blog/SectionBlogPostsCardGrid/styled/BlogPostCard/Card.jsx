/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import {
  mixinDropShadowAmbientLight,
  mixinDropShadowAmbientLightHover,
  mixinDropShadowDirectLight,
  mixinDropShadowDirectLightHover,
  transitionThemedModeSwitch,
} from "styles/shared";

/**
 * The styled card component to represent a blog post.
 * @since 0.10.0
 */
const Card = styled.article`
  position: relative;
  border-radius: 12px;
  box-shadow: ${mixinDropShadowDirectLight()}, ${mixinDropShadowAmbientLight()};
  transition: ${transitionThemedModeSwitch("box-shadow")}, ${transitionThemedModeSwitch("background-color")};

  &:hover {
    box-shadow: ${mixinDropShadowDirectLightHover()}, ${mixinDropShadowAmbientLightHover()};
  }

  ${({ theme }) => theme.media.tabletPortrait`
    grid-column: ${({ large, single }) => large && `auto/span ${single ? 3 : 2}`};
  `};
`;

export default Card;
