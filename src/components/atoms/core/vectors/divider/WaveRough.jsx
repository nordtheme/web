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
 * A SVG vector graphic divider component rendering a rough wave form.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.6.0
 * @see https://developer.mozilla.org/de/docs/Web/SVG
 */
const WaveRough = props => (
  <DividerSvg {...props} viewBox="0 0 1920 240" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0c62.028 23.301 207.726 31.062 355.345 10.956 194.93-26.548 329.274 58.551 412.36 95.275 113.991 50.379 161.026 36.177 242.491 47.604 81.464 11.428 80.28 30.32 167.409 35.339 99.802 5.746 258.527-51.115 385.457-10.565 156.954 50.136 300.814-6.06 356.938 1.225V240H0V0z" />
  </DividerSvg>
);

export default WaveRough;
