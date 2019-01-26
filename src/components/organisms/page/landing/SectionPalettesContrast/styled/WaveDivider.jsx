/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { WaveSmoothFlat } from "atoms/core/vectors/divider";
import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const fillColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.background.sectioning.primary[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.background.sectioning.tertiary[MODE_DARK_NIGHT_FROST]
});

/**
 * A "smooth" and "flat" vector wave to render a visual differentiation to the next section.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.6.0
 */
const WaveDivider = styled(WaveSmoothFlat)`
  fill: ${fillColor};
  transition: fill ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

export default WaveDivider;
