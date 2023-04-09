/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import PropTypes from "prop-types";

const cardBasePropTypes = {
  logoComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.node]).isRequired,
  title: PropTypes.string.isRequired,
};

const cardIconPropTypes = {
  accentColor: PropTypes.string.isRequired,
  iconComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.node]).isRequired,
  svgType: PropTypes.string,
};

/**
 * Provides shared prop types.
 * @since 0.9.0
 */
export { cardBasePropTypes, cardIconPropTypes };
