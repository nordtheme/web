/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/* eslint-disable no-useless-escape */

/**
 * Validates if the given route is internal.
 * Matches exactly one slash or hash, anything else is external including relative routes starting with two slahes.
 * The hash allows to link to anchors within the same document.
 *
 * @method isRouteInternal
 * @param  {string} route The route to validate.
 * @return {Boolean} `true` if the given route is internal, `false` otherwise.
 * @since 0.3.0
 */
const isRouteInternal = route => /^[\/#](?!\/)/.test(route);

export default isRouteInternal;
