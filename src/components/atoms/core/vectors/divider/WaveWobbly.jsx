/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import DividerSvg from "./DividerSvg";

/**
 * A SVG vector graphic divider component rendering a "wobbly" wave form.
 * @since 0.7.0
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG
 */
const WaveWobbly = (props) => (
  <DividerSvg {...props} viewBox="0 0 2463.834 324" xmlns="http://www.w3.org/2000/svg">
    <path d="M449.979 194.247c116.719-64.927 202.059-74.405 277.129 8.894S854.826 70.9 945.537 63.955s132.559 75.705 222.363 55.469 213.11-152.42 385.11-111.672c172 40.747 160.191 200.818 264.359 170.945 104.167-29.873 125.46-98.789 203.364-79.848 64.65 15.721 100.484 121.061 177.736 86.945C2451.397 74.1 2463.834 324 2463.834 324H0s63.247-148.374 251.034-95.148c91.928 26.056 122.236 8.066 198.945-34.605z" />
  </DividerSvg>
);

export default WaveWobbly;
