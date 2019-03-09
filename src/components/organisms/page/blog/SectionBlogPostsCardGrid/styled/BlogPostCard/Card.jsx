/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import {
  mixinDropShadowAmbientLight,
  mixinDropShadowAmbientLightHover,
  mixinDropShadowDirectLight,
  mixinDropShadowDirectLightHover,
  transitionThemedModeSwitch
} from "styles/shared";

/**
 * The styled card component to represent a blog post.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
