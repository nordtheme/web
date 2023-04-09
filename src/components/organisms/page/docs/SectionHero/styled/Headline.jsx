/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { H1 } from "atoms/core/html-elements";
import { media, motion, ms } from "styles/theme";

/**
 * A component that represents the large headline of the hero section.
 * @since 0.8.0
 */
const Headline = styled(H1)`
  font-weight: bold;
  margin-bottom: 0.8em;
  font-size: ${ms(6)};
  transition: color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
  text-align: center;

  ${media.tabletLandscape`
    font-size: ${ms(7)};
  `};

  ${media.desktop`
    font-size: ${ms(8)};
  `};
`;

export default Headline;
