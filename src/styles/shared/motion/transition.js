/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides shared theme mode transition styles for all components.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 */

import { motion } from "styles/theme";

const transitionThemedModeSwitch = (propName, duration, timingFunction = "ease-in-out") =>
  `${propName} ${duration > 0 || motion.speed.duration.transition.base.themeModeSwitch}ms ${timingFunction}`;

/* eslint-disable-next-line import/prefer-default-export */
export { transitionThemedModeSwitch };
