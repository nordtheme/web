/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import PropTypes from "prop-types";

const illustrationPropTypes = {
  illustrationStyles: PropTypes.arrayOf(PropTypes.string).isRequired,
  viewBox: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.string]),
};

const svgPropTypes = {
  svgRef: PropTypes.node,
};

/**
 * Provides shared prop types.
 * @since 0.9.0
 */
export { illustrationPropTypes, svgPropTypes };
