/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const backgroundColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord4,
  [MODE_DARK_NIGHT_FROST]: colors.nord2
});

/**
 * A base HTML component that represents a visual thematic break between paragraph-level elements.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.7.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr
 */
const Hr = styled.hr`
  background-color: ${backgroundColor};
  border: 0;
  height: ${({ size }) => size || 1}px;
  margin: ${({ spacing }) => spacing || 5}em auto;
  width: ${({ spreadPercent }) => spreadPercent || 35}%;
  transition: background-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

export default Hr;
