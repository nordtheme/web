/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";
import { lighten } from "polished";

import { motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const colorThemed = color =>
  themedMode({
    [MODE_BRIGHT_SNOW_FLURRY]: color,
    [MODE_DARK_NIGHT_FROST]: lighten(0.4, color)
  });

/**
 * A component that represents the author metadata of a Reddit post.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.7.0
 */
const MetadataAuthor = styled.span`
  color: ${({ color }) => colorThemed(color)};
  transition: color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

export default MetadataAuthor;
