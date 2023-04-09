/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import PropTypes from "prop-types";

const iconPropTypes = {
  /**
   * Flag to toggle the "outline" icon variant.
   */
  outlined: PropTypes.bool,

  /**
   * The React `ref` to be forwarded to the underlying SVG component.
   */
  svgRef: PropTypes.func,
};

const iconDefaultProps = {
  outlined: false,
  svgRef: () => {},
};

/**
 * @file Provides shared prop types.
 * @since 0.3.0
 * @see https://legacy.reactjs.org/docs/typechecking-with-proptypes.html
 */
export { iconDefaultProps, iconPropTypes };
