/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import PropTypes from "prop-types";

const locationPropTypes = {
  /**
   * The `location` object provided by React/Reach Router.
   * @see https://reach.tech/router/api/Router
   */
  location: PropTypes.shape({
    /**
     * The name of the current route/path.
     */
    pathname: PropTypes.string,
  }).isRequired,
};

/**
 * @file Provides shared prop types for pages.
 * @since 0.4.0
 * @see https://legacy.reactjs.org/docs/typechecking-with-proptypes.html
 */
/* eslint-disable-next-line import/prefer-default-export */
export { locationPropTypes };
