/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import DividerSvg from "./DividerSvg";

/**
 * A SVG vector graphic divider component rendering a flat smooth wave form.
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG
 */
const WaveSmoothFlat = (props) => (
  <DividerSvg {...props} viewBox="0 0 1440 47" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 .058c117.505 18.386 269.602 22.114 456.294 11.185C562.076 5.051 730.784.911 885.297 3.273 1157.177 7.432 1386.981 21.329 1440 38.39v8.55H0V.058z" />
  </DividerSvg>
);

export default WaveSmoothFlat;
