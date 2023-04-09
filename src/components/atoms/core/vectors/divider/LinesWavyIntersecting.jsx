/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import DividerSvg from "./DividerSvg";

/**
 * A SVG vector graphic divider component rendering two intersecting wavy lines.
 * @since 0.6.0
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG
 */
const LinesWavyIntersecting = (props) => (
  <DividerSvg {...props} viewBox="0 0 1600 173" xmlns="http://www.w3.org/2000/svg">
    <path d="M1665.731 145.823c-115.382 81.947-257.301-50.789-507.113-94.011C854.859-.745 794.065 148.685 426.121 93.955 334.889 80.383 279.017 62.33 183.4 75.585 20.51 98.165-64.362 184.803-137.338 140.42c-40.128-24.406-64.669-81.136-48.761-103.736 34.158-48.53 217.973 112.638 473.523 108.058 233.32-4.18 251.403-141.599 475.689-143.718 226.76-2.141 245.44 137.972 501.695 148.04 232.694 9.144 426.896-98.152 443.183-61.593 6.454 14.485-19.273 42.026-42.26 58.352z" />
  </DividerSvg>
);

export default LinesWavyIntersecting;
