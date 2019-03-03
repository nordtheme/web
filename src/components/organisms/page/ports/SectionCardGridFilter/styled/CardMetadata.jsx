/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { motion } from "styles/theme";

import { decentDecorationColor, fadedFontColor } from "../shared/styles";

/**
 * The container for metadata of a port project card.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
