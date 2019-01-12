/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";

import DividerSvg from "./DividerSvg";

/**
 * A SVG vector graphic divider component rendering a smooth wave form.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.6.0
 * @see https://developer.mozilla.org/de/docs/Web/SVG
 */
const WaveSmooth = props => (
  <DividerSvg {...props} viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
    <path d="M1440 21.21V120H0V21.21C120 35.07 240 42 360 42s240-6.93 360-20.79c88.328-8.794 154.574-14.333 198.738-16.618A3120.562 3120.562 0 0 1 1080 .42c120 0 240 6.93 360 20.79z" />
  </DividerSvg>
);

export default WaveSmooth;
