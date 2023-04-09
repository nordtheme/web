/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */
import styled from "styled-components";

import { WaveSmooth2 } from "atoms/core/vectors/divider";
import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const fillColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.background.sectioning.secondary[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.background.sectioning.secondary[MODE_DARK_NIGHT_FROST],
});

/**
 * A "smooth" vector wave to render a visual differentiation to the next section.
 * @since 0.12.0
 */
const WaveDivider = styled(WaveSmooth2)`
  fill: ${fillColor};
  transition: fill ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

export default WaveDivider;
