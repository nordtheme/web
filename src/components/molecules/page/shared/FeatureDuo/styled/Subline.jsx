/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { P } from "atoms/core/html-elements";
import { motion, ms } from "styles/theme";

/**
 * The subline of the text content sub-container.
 * @since 0.6.0
 */
const Subline = styled(P)`
  font-size: ${ms(2)};
  transition: color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

export default Subline;
