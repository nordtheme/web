/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * The values for motion durations.
 *
 * @type {object}
 * @since 0.2.0
 * @see https://m2.material.io/design/motion/speed.html#controlling-speed
 */
const duration = {
  unit: "ms",
  exitReducerFactor: 0.8,
  transition: {
    base: { themeModeSwitch: 400 },
    area: {
      fullscreen: 400,
      large: 300,
      medium: 250,
      small: 100,
    },
    text: {
      fade: 200,
    },
  },
};

/**
 * The values for motion speed.
 * @type {object}
 * @since 0.2.0
 */
const speed = { duration };

/**
 * @file Provides motion speed values.
 * @see https://material.io/design/motion/speed.html
 * @since 0.2.0
 */

export { duration };
export default speed;
