/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/theme";

/**
 * The PuTTY logo as SVG vector graphic component.
 * @since 0.9.0
 */
const PuTTY = ({ fillColors, svgRef, ...passProps }) => (
  <svg {...passProps} ref={svgRef} viewBox="0 0 46 38.897" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M.938 0C.409.068.008.515 0 1.049v19.119c0 .556.497 1.048 1.048 1.048h9.558v3.537H3.535v3.534h12.873V21.27l-4.089-3.591h-8.01a.75.75 0 0 1-.718-.717V4.253c-.007-.331.228-.656.551-.716a.667.667 0 0 1 .167 0h19.667c.374 0 .719.352.719.717v5.084h3.591V1.049A1.086 1.086 0 0 0 27.234 0"
      fill={fillColors.monitorTop}
    />
    <path
      d="M24.98 10.608l4.365 3.536h12.32c.374 0 .719.345.719.717V27.57a.75.75 0 0 1-.719.717H22a.753.753 0 0 1-.718-.717v-1.989l-3.572-3.147v8.344a1.07 1.07 0 0 0 1.052 1.048h9.558v3.537h-7.073v3.535h21.217v-3.535h-7.071v-3.537h9.538c.558 0 1.069-.49 1.069-1.048v-19.12a1.09 1.09 0 0 0-1.069-1.049"
      fill={fillColors.monitorBottom}
    />
    <path d="M7.071 10.608l15.913 14.145v-8.841l12.376 5.304L17.681 7.071v6.63L7.08 10.608" fill={fillColors.lightning} />
  </svg>
);

PuTTY.propTypes = {
  fillColors: PropTypes.shape({
    lightning: PropTypes.string,
    monitorBottom: PropTypes.string,
    monitorTop: PropTypes.string,
  }),
  svgRef: PropTypes.func,
};

PuTTY.defaultProps = {
  fillColors: {
    lightning: colors.nord13,
    monitorBottom: colors.nord7,
    monitorTop: colors.nord8,
  },
  svgRef: () => {},
};

export default PuTTY;
