/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */
import styled from "styled-components";
import posed from "react-pose";

import {
  mixinDropShadowAmbientLight,
  mixinDropShadowAmbientLightHover,
  mixinDropShadowDirectLight,
  mixinDropShadowDirectLightHover,
  transitionThemedModeSwitch,
} from "styles/shared";

import { componentBaseBackgroundColor } from "../shared/styles";

/**
 * The card component to represent a port project and its metadata.
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
