/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

const React = require("react");

const gatsby = jest.requireActual("gatsby");

/**
 * A mock for the `gatsby` module which makes it a lot easier to test components that use the `Link` component or any GraphQL feature.
 * @since 0.4.0
 * @see https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/#mocking-gatsby
 * @see https://jestjs.io/docs/manual-mocks
 */
module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    ({ to, ...rest }) =>
      React.createElement("a", {
        ...rest,
        href: to,
      })
    /* eslint-disable-next-line function-paren-newline */
  ),
  StaticQuery: jest.fn(),
};
