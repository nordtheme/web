/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import DividerSvg from "./DividerSvg";

/**
 * A SVG vector graphic divider component rendering a roaring wave form.
 * @since 0.6.0
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG
 */
const WaveRoaring = (props) => (
  <DividerSvg {...props} viewBox="0 0 2000 242" xmlns="http://www.w3.org/2000/svg">
    <path d="M2000 75.463c-230.631 73.429-431.99 108.499-604.064 105.196-293.434-5.632-485.998-145.823-954.537-150.568C272.956 28.385 125.825 50.689 0 96.996V242h2000V75.463z" />
  </DividerSvg>
);

export default WaveRoaring;
