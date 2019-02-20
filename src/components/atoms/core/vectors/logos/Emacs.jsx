/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/theme";

/**
 * The Emacs logo as SVG vector graphic component.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const Emacs = ({ fillColor, svgRef, ...passProps }) => (
  <svg {...passProps} ref={svgRef} viewBox="0 0 42.458 46" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M35.384 0H22.998c3.771.875 12.386 2.856 12.386 4.426 0 3.342-15.924-.887-19.461-.887-1.769 0-5.304.297-5.308 2.653-.013 6.193 8.318 11.501 14.154 15.04-4.063-1.179-7.786-1.771-11.323-1.771C8.846 19.46 0 21.231 0 27.424 0 32.9 11.089 37.937 14.154 38.923c5.323 1.714 14.154 2.645 14.154 3.535 0 .887-7.077 1.771-15.925 1.771H7.077C10.615 46 15.923 46 21.23 46l5.306-.003c3.539-.003 12.383-.126 12.383-3.18 0-2.668-10.612-4.921-15.921-6.017-7.402-1.528-12.778-4.499-12.383-6.721.944-5.329 14.154-5.31 24.769-5.31-4.631-3.717-15.924-10.615-15.924-13.622 0-1.288 1.771-1.582 3.538-1.593 7.077-.036 12.386 1.503 14.157 1.503 3.535 0 5.303-2.211 5.303-4.866 0-4.42-5.303-6.191-7.074-6.191z"
      fill={fillColor}
    />
  </svg>
);

Emacs.propTypes = {
  fillColor: PropTypes.string,
  svgRef: PropTypes.func
};

Emacs.defaultProps = {
  fillColor: colors.nord8,
  svgRef: () => {}
};

export default Emacs;
