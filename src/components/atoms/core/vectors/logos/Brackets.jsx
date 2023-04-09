/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/theme";

/**
 * The Brackets logo as SVG vector graphic component.
 * @since 0.9.0
 */
const Brackets = ({ fillColors, svgRef, ...passProps }) => (
  <svg {...passProps} ref={svgRef} viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.999 0h.006C35.704 0 46 10.295 46 23v.006C46 35.701 35.704 46 23.004 46h-.006C10.296 46 0 35.701 0 23.005V23C0 10.295 10.296 0 22.999 0"
      fill={fillColors.circle}
    />
    <path d="M9.199 10.732v24.532h12.266v-4.598H13.8V15.333h7.665v-4.601m15.35 0v24.532H24.532v-4.598h7.683V15.333h-7.683v-4.601" fill={fillColors.brackets} />
  </svg>
);

Brackets.propTypes = {
  fillColors: PropTypes.shape({
    brackets: PropTypes.string,
    circle: PropTypes.string,
  }),
  svgRef: PropTypes.func,
};

Brackets.defaultProps = {
  fillColors: {
    brackets: colors.nord8,
    circle: colors.nord4,
  },
  svgRef: () => {},
};

export default Brackets;
