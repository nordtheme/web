/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides motion speed values.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://material.io/design/motion/speed.html
 * @since 0.2.0
 */

/**
 * The values for motion durations.
 *
 * @type {object}
 * @see @see https://material.io/design/motion/speed.html#duration
 * @since 0.2.0
 */
const duration = {
  unit: "s",
  transition: {
    base: { themeModeSwitch: 0.4 },
    area: { large: 0.4 }
  }
};

/**
 * The values for motion speed.
 *
 * @type {object}
 * @since 0.2.0
 */
const speed = { duration };

export { duration };
export default speed;
