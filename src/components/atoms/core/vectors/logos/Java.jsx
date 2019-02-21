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
 * The Java logo as SVG vector graphic component.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const Java = ({ fillColors, svgRef, ...passProps }) => (
  <svg {...passProps} ref={svgRef} viewBox="0 0 35.386 46" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.159 45.855c8.64.532 21.909-.299 22.227-4.208 0 0-.608 1.478-7.147 2.659-7.374 1.328-16.469 1.173-21.865.327-.001 0 1.104.867 6.785 1.222"
      fill={fillColors.coffeePot}
    />
    <path
      d="M32.341 39.296s1.362 1.069-1.493 1.896c-5.424 1.572-22.565 2.048-27.326.058-1.706-.713 1.499-1.692 2.508-1.907 1.059-.224 1.653-.18 1.653-.18-1.892-1.294-12.302 2.528-5.279 3.61 19.15 2.982 34.906-1.337 29.939-3.48m-4.423-5.588c8.999-4.483 4.838-8.791 1.936-8.21-.712.144-1.029.262-1.029.262s.257-.396.761-.566c5.758-1.936 10.165 5.714-1.853 8.738 0 0 .137-.115.181-.228m-15.642-8.383s-8.722 1.984-3.088 2.709c2.384.305 7.113.236 11.536-.115 3.613-.292 7.235-.918 7.235-.918s-1.278.529-2.197 1.129c-8.845 2.235-25.951 1.188-21.038-1.091 4.167-1.929 7.554-1.708 7.554-1.708"
      fill={fillColors.coffeePot}
    />
    <path
      d="M19.922 22.007c2.315 2.549-.623 4.85-.623 4.85s5.881-2.914 3.192-6.55c-2.535-3.402-4.463-5.08 6.009-10.919 0 0-16.429 3.933-8.587 12.599"
      fill={fillColors.smoke}
    />
    <path
      d="M22.488 0s4.982 4.783-4.735 12.137c-7.78 5.894-1.768 9.259 0 13.097-4.54-3.928-7.878-7.39-5.64-10.616C15.395 9.889 24.499 7.603 22.486.008"
      fill={fillColors.smoke}
    />
  </svg>
);

Java.propTypes = {
  fillColors: PropTypes.shape({
    coffeePot: PropTypes.string,
    smoke: PropTypes.string
  }),
  svgRef: PropTypes.func
};

Java.defaultProps = {
  fillColors: {
    coffeePot: colors.nord8,
    smoke: colors.nord4
  },
  svgRef: () => {}
};

export default Java;
