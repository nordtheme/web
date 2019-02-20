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
 * The Sublime Text logo as SVG vector graphic component.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const SublimeText = ({ fillColors, svgRef, ...passProps }) => (
  <svg {...passProps} ref={svgRef} viewBox="0 0 35.386 46" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M35.378 23.136c0-.539-.396-.849-.885-.695L.887 33.106c-.49.156-.887.718-.887 1.258v10.9c0 .54.397.85.887.696l33.607-10.667c.488-.155.885-.718.885-1.256V23.136z"
      fill={fillColors.fragmentsBottom}
    />
    <path
      d="M16.933 28.018l-3.673 1.163 20.25 6.43.983-.316c.489-.155.889-.718.889-1.256v-.167l-18.45-5.854h.001z"
      opacity=".1"
    />
    <path
      d="M0 22.788c0 .539.397 1.104.887 1.259l33.612 10.667c.489.152.888-.157.888-.694V23.116c0-.539-.398-1.101-.888-1.256L.887 11.192c-.49-.155-.887.156-.887.695v10.901z"
      fill={fillColors.fragmentsMiddle}
    />
    <path
      d="M35.378.736c0-.539-.396-.851-.885-.696L.887 10.705c-.49.156-.887.72-.887 1.259v10.901c0 .539.397.85.887.695l33.607-10.666c.488-.156.885-.719.885-1.257V.736z"
      fill={fillColors.fragmentsTop}
    />
  </svg>
);

SublimeText.propTypes = {
  fillColors: PropTypes.shape({
    fragmentsBottom: PropTypes.string,
    fragmentsMiddle: PropTypes.string,
    fragmentsTop: PropTypes.string
  }),
  svgRef: PropTypes.func
};

SublimeText.defaultProps = {
  fillColors: {
    fragmentsBottom: colors.nord10,
    fragmentsMiddle: colors.nord9,
    fragmentsTop: colors.nord8
  },
  svgRef: () => {}
};

export default SublimeText;
