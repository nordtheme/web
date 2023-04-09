/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

const easings = {
  easeInQuad: [0.55, 0.085, 0.68, 0.53],
  easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
  easeOutCubic: [0.215, 0.61, 0.355, 1],
  easeOutQuart: [0.165, 0.84, 0.44, 1],
};

/**
 * Provides motion easing values.
 * @since 0.10.0
 * @see https://material.io/design/motion/speed.html#easing
 * @see https://easings.net
 */
export default easings;
