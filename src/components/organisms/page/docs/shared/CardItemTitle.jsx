/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const inProgressColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.font.faded[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.font.faded[MODE_DARK_NIGHT_FROST],
});

/**
 * A component that represents the title of an card item.
 * @since 0.8.0
 */
const CardItemTitle = styled.div`
  font-weight: 600;
  color: ${({ inProgress }) => inProgress && inProgressColor};
  transition: color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

export default CardItemTitle;
