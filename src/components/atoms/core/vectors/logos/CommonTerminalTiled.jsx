/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/theme";

/**
 * A common tiled terminal logo as SVG vector graphic component.
 * @since 0.9.0
 */
const CommonTerminalTiled = ({ fillColor, svgRef, ...passProps }) => (
  <svg {...passProps} ref={svgRef} viewBox="0 0 26.829 46" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M26.829 19.172v-3.828H15.331v3.828M26.829 46v-3.832H15.331V46M3.197 44.697L0 41.441l7.193-5.693L0 30.059l3.197-3.245 10.793 8.93-10.793 8.937m0-26.79L0 14.635l7.193-5.69L0 3.256 3.197 0 13.99 8.937l-10.793 8.94"
      fill={fillColor}
    />
  </svg>
);

CommonTerminalTiled.propTypes = {
  fillColor: PropTypes.string,
  svgRef: PropTypes.func,
};

CommonTerminalTiled.defaultProps = {
  fillColor: colors.nord8,
  svgRef: () => {},
};

export default CommonTerminalTiled;
