/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/theme";

/**
 * A common terminal logo as SVG vector graphic component.
 * @since 0.9.0
 */
const CommonTerminal = ({ fillColor, svgRef, ...passProps }) => (
  <svg {...passProps} ref={svgRef} viewBox="0 0 46 38.338" xmlns="http://www.w3.org/2000/svg">
    <path d="M46 38.338v-7.669H22.998v7.669M5.257 30.669L0 25.097l11.831-9.762L0 5.576 5.257 0l17.748 15.335" fill={fillColor} />
  </svg>
);

CommonTerminal.propTypes = {
  fillColor: PropTypes.string,
  svgRef: PropTypes.func,
};

CommonTerminal.defaultProps = {
  fillColor: colors.nord8,
  svgRef: () => {},
};

export default CommonTerminal;
