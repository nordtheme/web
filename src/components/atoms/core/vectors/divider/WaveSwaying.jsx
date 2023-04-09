/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import DividerSvg from "./DividerSvg";

/**
 * A SVG vector graphic divider component rendering a "swaying" wave form.
 * @since 0.7.0
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG
 */
const WaveSwaying = (props) => (
  <DividerSvg {...props} viewBox="0 0 1440 94" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 .91c37.102-3.789 72.529 8.207 112.12 35.083 104.792 71.133 186.932 18.896 299.41-18.297 112.476-37.193 128.544 64.109 218.349 43.87 89.805-20.238 155.519-61.91 327.519-21.16s253.141 66.825 357.309 36.95c49.177-14.104 85.113-37.259 125.293-57.88V94H0V.91z" />
  </DividerSvg>
);

export default WaveSwaying;
