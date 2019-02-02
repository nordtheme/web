/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { P } from "atoms/core/HTMLElements";
import { motion, ms } from "styles/theme";

/**
 * A component that represents the subline of the hero section's headline.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
