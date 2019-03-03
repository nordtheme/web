/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled, { css } from "styled-components";

import { H2 } from "atoms/core/html-elements";
import { media, motion, ms } from "styles/theme";

/**
 * The headline of the text content sub-container.
 * The font size can be increase by passing the `large` boolean prop.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.6.0
 */
const Headline = styled(H2)`
  font-weight: bold;
  margin-bottom: 0.8em;
  transition: color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;

  ${({ large }) =>
    large &&
    css`
      font-size: ${ms(6)};

      ${media.tabletLandscape`
      font-size: ${ms(7)};
    `};

      ${media.desktop`
      font-size: ${ms(8)};
    `};
    `}
`;

export default Headline;
