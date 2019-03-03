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
 * The ConEmu logo as SVG vector graphic component.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const ConEmu = ({ fillColor, svgRef, ...passProps }) => (
  <svg {...passProps} ref={svgRef} viewBox="0 0 46 43.897" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.934 43.886c-6.37 0-12.738-.014-19.106.011-1.455.006-2.745-.237-3.42-1.687a4.077 4.077 0 0 1-.389-1.656A11258 11258 0 0 1 .012 3.342C.016 1.251 1.24.021 3.311.016c13.112-.021 26.223-.021 39.335 0 2.071.005 3.239 1.229 3.304 3.33.037 1.288.045 2.58.037 3.867-.008 1.127-.627 1.659-1.726 1.671-.541.006-1.086-.022-1.625.01-1.333.075-2.31-.156-2.568-1.797-.149-.943-1.04-1.34-2.104-1.333-6.075.034-12.153.015-18.23.015-3.913 0-7.827-.006-11.738.005-1.529.004-2.205.665-2.206 2.158a21735.8 21735.8 0 0 0 0 27.973c.001 1.641.517 2.162 2.157 2.164 10.031.01 20.063-.006 30.095.018 1.246.003 1.967-.473 2.132-1.721.005-.043.002-.084.013-.123.337-1.167 1.672-1.584 4.157-1.279 1.048.13 1.676.672 1.655 1.801-.024 1.415-.004 2.83-.077 4.242-.081 1.561-1.297 2.802-2.885 2.813-6.077.055-12.155.045-18.23.057-.625.003-1.25-.001-1.873-.001zM15.86 19.21c-.658.006-1.537.097-1.926.513-1.035 1.108-.916 2.525-.426 3.863.425 1.157 1.475 1.376 2.539 1.376 9.062.017 18.125.017 27.188.004 2.062-.004 2.692-.796 2.737-3.075.041-2.056-.476-2.741-2.677-2.718-4.53.045-9.062.015-13.593.015-4.613 0-9.228-.019-13.842.022z"
      fill={fillColor}
    />
  </svg>
);

ConEmu.propTypes = {
  fillColor: PropTypes.string,
  svgRef: PropTypes.func
};

ConEmu.defaultProps = {
  fillColor: colors.nord8,
  svgRef: () => {}
};

export default ConEmu;
