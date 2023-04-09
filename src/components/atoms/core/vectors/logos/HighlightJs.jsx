/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/theme";

/**
 * The highlight.js logo as SVG vector graphic component.
 * @since 0.9.0
 */
const HighlightJs = ({ fillColor, svgRef, ...passProps }) => (
  <svg {...passProps} ref={svgRef} viewBox="0 0 46 28.307" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.384 0L0 11.322v5.662l12.384 11.322v-8.494l-6.193-5.654 6.193-5.666V0zm21.229 0L46 11.322v5.662L33.613 28.307v-8.494l6.193-5.654-6.193-5.666V0zm-7.664 0h5.897L20.052 28.307h-5.897L25.949 0z"
      fill={fillColor}
    />
  </svg>
);

HighlightJs.propTypes = {
  fillColor: PropTypes.string,
  svgRef: PropTypes.func,
};

HighlightJs.defaultProps = {
  fillColor: colors.nord8,
  svgRef: () => {},
};

export default HighlightJs;
