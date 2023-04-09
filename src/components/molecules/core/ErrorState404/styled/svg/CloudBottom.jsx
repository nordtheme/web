/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { colors } from "styles/theme";

import { svgPropTypes } from "../../shared/propTypes";

const SvgElements = ({ svgRef, ...props }) => (
  <g ref={svgRef} {...props}>
    <path
      d="M140.948 279.726v-.306a6.333 6.333 0 0 1 6.333-6.333h94.625a6.333 6.333 0 0 0 0-12.665h-1.249a6.332 6.332 0 0 1-6.332-6.332v-.306a6.333 6.333 0 0 1 6.332-6.333h72.089a6.333 6.333 0 0 1 6.333 6.333v.306a6.332 6.332 0 0 1-6.333 6.332h-24.622a6.332 6.332 0 1 0 0 12.665h1.345a6.332 6.332 0 0 1 6.332 6.333v.306a6.332 6.332 0 0 1-6.332 6.332h-26.386a6.332 6.332 0 1 0 0 12.665h61.068a6.332 6.332 0 0 1 6.332 6.333v.306a6.332 6.332 0 0 1-6.332 6.332H173.775a6.333 6.333 0 0 1-6.333-6.332v-.306a6.333 6.333 0 0 1 6.333-6.333h4.016a6.332 6.332 0 1 0 0-12.665H147.28a6.332 6.332 0 0 1-6.332-6.332z"
      fill={colors.nord6}
    />
    <path
      d="M271.616 298.723h-10.674a6.332 6.332 0 0 1 0-12.665h10.674a6.332 6.332 0 1 0 0 12.665zm26.385-12.665h-10.674a6.332 6.332 0 0 0 6.333-6.332v-.306a6.333 6.333 0 0 0-6.333-6.333h-1.343a6.332 6.332 0 1 1 0-12.665h10.673a6.333 6.333 0 0 0 0 12.665h1.344a6.332 6.332 0 0 1 6.332 6.333v.306a6.332 6.332 0 0 1-6.332 6.332zm23.277-25.636h-10.673a6.333 6.333 0 0 0 6.333-6.332v-.306a6.334 6.334 0 0 0-6.333-6.333h10.673a6.333 6.333 0 0 1 6.333 6.333v.306a6.332 6.332 0 0 1-6.333 6.332zm7.065 44.939v-.306a6.332 6.332 0 0 0-6.332-6.333h10.674a6.332 6.332 0 0 1 6.331 6.333v.306a6.332 6.332 0 0 1-6.331 6.332h-10.674a6.332 6.332 0 0 0 6.332-6.332z"
      fill={colors.nord4}
    />
  </g>
);

/**
 * A vector illustration component rendering cloud SVG fragments.
 * @since 0.3.0
 */
const CloudBottom = React.forwardRef((props, ref) => <SvgElements svgRef={ref} {...props} />);

SvgElements.propTypes = svgPropTypes;

export default CloudBottom;
