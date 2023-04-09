/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const fontColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.font.faded[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.font.faded[MODE_DARK_NIGHT_FROST],
});

/**
 * A container for copyright related metadata components.
 * @since 0.5.0
 */
const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 0.8em;
  color: ${fontColor};
  transition: color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
  margin-top: 1.125em;

  ${({ theme }) => theme.media.tabletLandscape`
    display: block;
    text-align: start;
  `};
`;

export default Copyright;
