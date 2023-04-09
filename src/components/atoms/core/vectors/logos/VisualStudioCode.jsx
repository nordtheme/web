/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/theme";

/**
 * The Visual Studio Code logo as SVG vector graphic component.
 * @since 0.9.0
 */
const VisualStudioCode = ({ fillColor, svgRef, ...passProps }) => (
  <svg {...passProps} ref={svgRef} viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M45.995 4.29L35.034 0 15.905 18.194 4.385 9.63.004 11.78 0 34.241l4.36 2.14 11.51-8.559L35.048 46l10.949-4.274-.002-37.436zM5.48 27.818l-.007-9.615 5.477 4.773-5.47 4.842zm17.519-4.845l10.947-7.992.004 16.05-10.951-8.058z"
      fill={fillColor}
    />
  </svg>
);

VisualStudioCode.propTypes = {
  fillColor: PropTypes.string,
  svgRef: PropTypes.func,
};

VisualStudioCode.defaultProps = {
  fillColor: colors.nord8,
  svgRef: () => {},
};

export default VisualStudioCode;
