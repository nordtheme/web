/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file A mock for the `gatsby` module which makes it a lot easier to test components that use the `Link` component or
 * any GraphQL feature.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://www.gatsbyjs.org/docs/unit-testing/#mocking-gatsby
 * @see https://jestjs.io/docs/en/manual-mocks
 * @since 0.4.0
 */

const React = require("react");

const gatsby = jest.requireActual("gatsby");

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    ({ to, ...rest }) =>
      React.createElement("a", {
        ...rest,
        href: to
      })
    /* eslint-disable-next-line function-paren-newline */
  ),
  StaticQuery: jest.fn()
};
