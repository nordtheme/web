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
 * The tmux logo as SVG vector graphic component.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const Tmux = ({ fillColors, svgRef, ...passProps }) => (
  <svg {...passProps} ref={svgRef} viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 2.557v40.887A2.558 2.558 0 0 0 2.557 46h18.987V0H2.557A2.557 2.557 0 0 0 0 2.557z"
      fill={fillColors.tileLeft}
    />
    <path d="M24.456 46h18.987A2.559 2.559 0 0 0 46 43.443V21.974H24.456V46z" fill={fillColors.tileRightBottom} />
    <path d="M43.443 0H24.456v19.062H46V2.557A2.557 2.557 0 0 0 43.443 0z" fill={fillColors.tileRightTop} />
    <path
      d="M2.557 46h40.887A2.558 2.558 0 0 0 46 43.443v-1.482H0v1.482A2.559 2.559 0 0 0 2.557 46z"
      fill={fillColors.statusBar}
    />
  </svg>
);

Tmux.propTypes = {
  fillColors: PropTypes.shape({
    statusBar: PropTypes.string,
    tileLeft: PropTypes.string,
    tileRightBottom: PropTypes.string,
    tileRightTop: PropTypes.string
  }),
  svgRef: PropTypes.func
};

Tmux.defaultProps = {
  fillColors: {
    statusBar: colors.nord8,
    tileLeft: colors.nord1,
    tileRightBottom: colors.nord3,
    tileRightTop: colors.nord2
  },
  svgRef: () => {}
};

export default Tmux;
