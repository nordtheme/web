/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/theme";

/**
 * The Eclipse logo as SVG vector graphic component.
 * @since 0.9.0
 */
const Eclipse = ({ fillColors, svgRef, ...passProps }) => (
  <svg {...passProps} ref={svgRef} viewBox="0 0 46 38.08" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M26.959.01h.006C37.455-.012 45.977 8.474 46 18.963v.088c.018 10.489-8.47 19.009-18.961 19.028h-.08c-10.488.022-19.007-8.462-19.029-18.951v-.084C7.907 8.556 16.39.034 26.877.01h.082"
      fill={fillColors.planet}
    />
    <path
      d="M19.035.01C8.544-.012.023 8.474 0 18.963v.081c-.022 10.49 8.464 19.013 18.954 19.035h.081c.541 0 1.053-.058 1.586-.1-9.79-.814-17.448-8.938-17.448-18.94C3.173 9.033 10.832.912 20.621.105 20.086.058 19.574 0 19.035 0"
      fill={fillColors.shade}
    />
    <path
      d="M9.661 11.111a19.045 19.045 0 0 0-1.14 3.173h36.878a19.2 19.2 0 0 0-1.139-3.173M8.023 17.458c-.042.532-.099 1.046-.099 1.585 0 .54.054 1.053.099 1.585h37.871c.042-.532.1-1.046.1-1.585 0-.541-.056-1.055-.1-1.585M8.517 23.801a19.774 19.774 0 0 0 1.141 3.172h34.6a18.252 18.252 0 0 0 1.139-3.172"
      fill={fillColors.rings}
    />
  </svg>
);

Eclipse.propTypes = {
  fillColors: PropTypes.shape({
    planet: PropTypes.string,
    rings: PropTypes.string,
    shade: PropTypes.string,
  }),
  svgRef: PropTypes.func,
};

Eclipse.defaultProps = {
  fillColors: {
    planet: colors.nord8,
    rings: colors.nord4,
    shade: colors.nord9,
  },
  svgRef: () => {},
};

export default Eclipse;
