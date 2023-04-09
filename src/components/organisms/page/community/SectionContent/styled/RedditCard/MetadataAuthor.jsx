/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";
import { lighten } from "polished";

import { motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const colorThemed = (color) =>
  themedMode({
    [MODE_BRIGHT_SNOW_FLURRY]: color,
    [MODE_DARK_NIGHT_FROST]: lighten(0.4, color),
  });

/**
 * A component that represents the author metadata of a Reddit post.
 * @since 0.7.0
 */
const MetadataAuthor = styled.span`
  color: ${({ color }) => colorThemed(color)};
  transition: color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

export default MetadataAuthor;
