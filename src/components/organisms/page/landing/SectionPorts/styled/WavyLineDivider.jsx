/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { LinesWavyIntersecting } from "atoms/core/vectors/divider";
import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const strokeColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord5,
  [MODE_DARK_NIGHT_FROST]: colors.nord3,
});

/**
 * Two "wavy intersecting" lines to render a visual differentiation to the next section.
 * @since 0.6.0
 */
const WavyLineDivider = styled(LinesWavyIntersecting)`
  stroke: ${strokeColor};
  fill: none;
  transition: fill ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

export default WavyLineDivider;
