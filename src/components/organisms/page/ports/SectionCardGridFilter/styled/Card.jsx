/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";
import posed from "react-pose";

import {
  mixinDropShadowAmbientLight,
  mixinDropShadowAmbientLightHover,
  mixinDropShadowDirectLight,
  mixinDropShadowDirectLightHover,
  transitionThemedModeSwitch
} from "styles/shared";

import { componentBaseBackgroundColor } from "../shared/styles";

/**
 * The card component to represent a port project and its metadata.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const Card = styled(posed.div())`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  height: auto;
  border-radius: 4px;
  background-color: ${componentBaseBackgroundColor};
  box-shadow: ${mixinDropShadowDirectLight()}, ${mixinDropShadowAmbientLight()};
  transition: ${transitionThemedModeSwitch("box-shadow")}, ${transitionThemedModeSwitch("background-color")};

  &:hover {
    box-shadow: ${mixinDropShadowDirectLightHover()}, ${mixinDropShadowAmbientLightHover()};
  }
`;

export default Card;
