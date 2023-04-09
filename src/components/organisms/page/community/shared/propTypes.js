/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import PropTypes from "prop-types";

const cardBasePropTypes = {
  logoComponent: PropTypes.node.isRequired,
  logoColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

/**
 * Provides shared prop types.
 * @since 0.9.0
 */
/* eslint-disable-next-line import/prefer-default-export */
export { cardBasePropTypes };
