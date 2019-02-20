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
 * The gedit logo as SVG vector graphic component.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const Gedit = ({ fillColors, svgRef, ...passProps }) => (
  <svg {...passProps} ref={svgRef} viewBox="0 0 35.385 46" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.548 0C.677 0 0 .678 0 1.548v42.903C0 45.322.677 46 1.548 46h32.29c.87 0 1.547-.678 1.547-1.549V8.854L26.538.008"
      fill={fillColors.paper}
    />
    <path d="M26.538 0v8.846h8.847" fill={fillColors.dogEar} />
    <path d="M35.385 17.69V8.846h-8.847" fillOpacity=".2" />
    <path d="M3.538 40.691h28.31v-3.539H3.538" fill={fillColors.lineBottom} />
    <path d="M3.538 31.847h17.694v-3.54H3.538" fill={fillColors.linesSecondary} />
    <path d="M3.538 24.769h23V21.23h-23" fill={fillColors.lineMiddle} />
    <path d="M3.538 17.69h14.155v-3.539H3.538" fill={fillColors.linesSecondary} />
    <path d="M3.538 10.616h19.463V7.077H3.538" fill={fillColors.lineTop} />
  </svg>
);

Gedit.propTypes = {
  fillColors: PropTypes.shape({
    dogEar: PropTypes.string,
    lineBottom: PropTypes.string,
    lineMiddle: PropTypes.string,
    lineTop: PropTypes.string,
    linesSecondary: PropTypes.string,
    paper: PropTypes.string
  }),
  svgRef: PropTypes.func
};

Gedit.defaultProps = {
  fillColors: {
    dogEar: colors.nord6,
    lineBottom: colors.nord10,
    lineMiddle: colors.nord9,
    lineTop: colors.nord8,
    linesSecondary: colors.nord3,
    paper: colors.nord4
  },
  svgRef: () => {}
};

export default Gedit;
