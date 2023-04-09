/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * A shim for a Gatsby specific `___loader` function used by Gatsby's internal APIs.
 * @type {object}
 * @since 0.1.0
 * @see https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/#setting-up-your-environment
 */
/* eslint-disable-next-line no-underscore-dangle */
global.___loader = {
  enqueue: jest.fn(),
};
