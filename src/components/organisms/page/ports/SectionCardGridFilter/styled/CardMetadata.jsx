/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { motion } from "styles/theme";

import { decentDecorationColor, fadedFontColor } from "../shared/styles";

/**
 * The container for metadata of a port project card.
 * @since 0.9.0
 */
const CardMetadata = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${decentDecorationColor};
  padding: 0.75em 0.85em 0.9em 0.85em;
  font-size: 0.7em;
  color: ${fadedFontColor};
  transition: color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out,
    border-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

export default CardMetadata;
