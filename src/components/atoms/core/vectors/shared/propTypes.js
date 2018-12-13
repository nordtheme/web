/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides shared prop types.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://reactjs.org/docs/typechecking-with-proptypes.html
 * @since 0.3.0
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
  svgRef: PropTypes.func
};

const iconDefaultProps = {
  outlined: false,
  svgRef: () => {}
};

export { iconDefaultProps, iconPropTypes };
