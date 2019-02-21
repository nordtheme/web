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
 * The Hyper logo as SVG vector graphic component.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const Hyper = ({ fillColor, svgRef, ...passProps }) => (
  <svg {...passProps} ref={svgRef} viewBox="0 0 45.999 35.023" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.881 19.138l-8.224-4.349L17.621 0 0 15.883l7.743 5.239-5.486 13.901zm6.102 10.104h20.016v3.896H25.983z"
      fill={fillColor}
    />
  </svg>
);

Hyper.propTypes = {
  fillColor: PropTypes.string,
  svgRef: PropTypes.func
};

Hyper.defaultProps = {
  fillColor: colors.nord8,
  svgRef: () => {}
};

export default Hyper;
