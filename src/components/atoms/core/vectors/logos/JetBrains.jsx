/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */
import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/theme";

/**
 * The JetBrains logo as SVG vector graphic component.
 * @since 0.9.0
 */
const JetBrains = ({ fillColors, svgRef, ...passProps }) => (
  <svg {...passProps} ref={svgRef} viewBox="0 0 45.997 46" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h45.997v46H0V0z" fill={fillColors.square} />
    <path
      d="M17.692 8.847V5.308H7.075v3.539h3.539V21.23H7.075v3.539h10.617V21.23h-3.539V8.847m11.662 15.892c-2.139-.247-3.641-1.641-4.987-2.87l2.148-2.426c.704.731 1.766 1.61 2.869 1.756 1.104.146 2.524.024 3.376-.697.853-.724.853-1.706.853-2.875V5.308h3.536l-.007 12.533c.007 2.49-.938 4.171-1.813 5.108-1.397 1.431-3.208 1.577-4.896 1.81"
      fill={fillColors.characters}
    />
    <path d="M3.539 37.153H21.23v3.539H3.539v-3.539z" fill={fillColors.stripe} />
  </svg>
);

JetBrains.propTypes = {
  fillColors: PropTypes.shape({
    characters: PropTypes.string,
    square: PropTypes.string,
    stripe: PropTypes.string,
  }),
  svgRef: PropTypes.func,
};

JetBrains.defaultProps = {
  fillColors: {
    characters: colors.nord7,
    square: colors.nord1,
    stripe: colors.nord4,
  },
  svgRef: () => {},
};

export default JetBrains;
