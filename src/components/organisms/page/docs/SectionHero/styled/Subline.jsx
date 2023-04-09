/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { P } from "atoms/core/html-elements";
import { motion, ms } from "styles/theme";

/**
 * A component that represents the subline of the hero section's headline.
 * @since 0.8.0
 */
const Subline = styled(P)`
  font-size: ${ms(2)};
  transition: color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
  max-width: 65%;
  margin: 0 auto;
  text-align: center;
`;

export default Subline;
