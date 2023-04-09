/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const color = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.font.faded[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.font.faded[MODE_DARK_NIGHT_FROST],
});

/**
 * A component that represents the creation date metadata of a Reddit post.
 * @since 0.7.0
 */
const MetadataCreationDate = styled.span`
  color: ${color};
  transition: color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

export default MetadataCreationDate;
