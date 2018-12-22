/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides shared prop types for pages.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://reactjs.org/docs/typechecking-with-proptypes.html
 * @since 0.4.0
 */

import PropTypes from "prop-types";

const locationPropTypes = {
  /**
   * The `location` object provided by React/Reach Router.
   *
   * @see https://reach.tech/router/api/Router
   */
  location: PropTypes.shape({
    /**
     * The name of the current route/path.
     */
    pathname: PropTypes.string
  }).isRequired
};

/* eslint-disable-next-line import/prefer-default-export */
export { locationPropTypes };
