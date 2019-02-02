/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";
import { em } from "polished";

import {
  colors,
  motion,
  themedMode,
  zIndexFor,
  MODE_BRIGHT_SNOW_FLURRY,
  MODE_DARK_NIGHT_FROST,
  Z_INDEX_ELEMENTS
} from "styles/theme";

import { backgroundColorVariants } from "../shared/styles";

const dropShadow = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: `0 5px 10px 0 ${colors.shadow.minimal[MODE_BRIGHT_SNOW_FLURRY]}`,
  [MODE_DARK_NIGHT_FROST]: `0 5px 10px 0 ${colors.shadow.minimal[MODE_DARK_NIGHT_FROST]}`
});

/**
 * The styled header with a fixed position and flexible height for the pinned(collapsed) and unpinned (expanded) header
 * modes.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
const Header = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  height: ${({ height, heightPinned, isPinned }) => (isPinned ? `${em(heightPinned)}` : `${em(height)}`)};
  width: 100%;
  z-index: ${zIndexFor(Z_INDEX_ELEMENTS.HEADER)};
  background-color: ${({ variant }) => backgroundColorVariants[variant]};
  box-shadow: ${({ isPinned }) => isPinned && dropShadow};
  transition: height ${motion.speed.duration.transition.area.medium}ms ease-in-out,
    box-shadow ${motion.speed.duration.transition.area.medium}ms ease-in-out,
    background-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
  user-select: none;
`;

export default Header;
