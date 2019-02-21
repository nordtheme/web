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
 * The Xresources logo as SVG vector graphic component.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const Xresources = ({ fillColors, svgRef, ...passProps }) => (
  <svg {...passProps} ref={svgRef} viewBox="0 0 36.04 46" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M26.387 0H3.285A3.284 3.284 0 0 0 0 3.285v39.43A3.286 3.286 0 0 0 3.285 46h29.469a3.286 3.286 0 0 0 3.285-3.285V9.652L26.387 0z"
      fill={fillColors.paper}
    />
    <path
      d="M18.02 27.929a4.93 4.93 0 1 1 0-9.859 4.93 4.93 0 0 1 0 9.859m8.367-21.562a3.286 3.286 0 0 0 3.285 3.286h6.367L26.387 0v6.367z"
      fill={fillColors.dot}
    />
  </svg>
);

Xresources.propTypes = {
  fillColors: PropTypes.shape({
    dot: PropTypes.string,
    paper: PropTypes.string
  }),
  svgRef: PropTypes.func
};

Xresources.defaultProps = {
  fillColors: {
    dot: colors.nord8,
    paper: colors.nord1
  },
  svgRef: () => {}
};

export default Xresources;
