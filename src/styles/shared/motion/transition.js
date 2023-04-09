/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { motion } from "styles/theme";

const transitionThemedModeSwitch = (propName, duration, timingFunction = "ease-in-out") =>
  `${propName} ${duration > 0 || motion.speed.duration.transition.base.themeModeSwitch}ms ${timingFunction}`;

/**
 * @file Provides shared theme mode transition styles for all components.
 * @since 0.10.0
 */

/* eslint-disable-next-line import/prefer-default-export */
export { transitionThemedModeSwitch };
