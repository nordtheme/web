/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { motion, ms } from "styles/theme";

/**
 * Caption for Nord's logo component.
 * It will fade out when the header changes into pinned (collapsed) mode.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
const LogoCaption = styled.span`
  font-size: ${ms(6)};
  font-weight: 500;
  transition: opacity ${motion.speed.duration.transition.text.fade}ms ease-in-out;
  opacity: ${({ isPinned }) => isPinned && 0};
  margin-left: 0.2775em;
`;

export default LogoCaption;
