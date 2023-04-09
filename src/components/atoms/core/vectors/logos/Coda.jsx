/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/theme";

/**
 * The Coda logo as SVG vector graphic component.
 * @since 0.9.0
 */
const Coda = ({ fillColor, svgRef, ...passProps }) => (
  <svg {...passProps} ref={svgRef} viewBox="0 0 37.669 46" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M32.207 35.731C43.904 21.943 33.175 0 33.175 0l1.502 3.643L33.175 0C19.607 14.945 8.79 10.739 2.334 23.979c-2.69 5.525-3.055 10.429-1.093 14.715.985 2.15 2.237 3.741 3.756 4.774C8.445 29.071 25.883 18.91 25.883 18.91 9.965 33.303 9.894 45.442 9.894 45.442l1.841.416-1.841-.416s10.623 4.058 22.313-9.711z"
      fill={fillColor}
    />
  </svg>
);

Coda.propTypes = {
  fillColor: PropTypes.string,
  svgRef: PropTypes.func,
};

Coda.defaultProps = {
  fillColor: colors.nord8,
  svgRef: () => {},
};

export default Coda;
