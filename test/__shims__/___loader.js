/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * A shim for a Gatsby specific `___loader` function used by Gatsby's internal APIs.
 *
 * @type {object}
 * @see https://www.gatsbyjs.org/docs/unit-testing/#setting-up-your-environment
 * @since 0.1.0
 */
/* eslint-disable-next-line no-underscore-dangle */
global.___loader = {
  enqueue: jest.fn()
};
