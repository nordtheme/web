/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Implementation of the Gatsby Node `onCreateBabelConfig` API.
 * @method onCreateBabelConfig
 * @param  {object} actions Collection of functions provided by Gatsby used to manipulate the state of the build process.
 * @since 0.1.0
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreateBabelConfig
 * @see https://www.gatsbyjs.com/docs/reference/config-files/actions
 */
const onCreateBabelConfig = ({ actions }) => {
  const isProductionMode = process.env.NODE_ENV === "production";

  /**
   * Allows to use the "ES Class Fields & Static Properties" proposal to transforms static class properties as well as
   * properties declared with the experimental property initializer syntax.
   *
   * @see https://github.com/tc39/proposal-class-fields
   * @see https://babeljs.io/docs/babel-plugin-proposal-class-properties
   */
  actions.setBabelPlugin({
    name: "@babel/plugin-proposal-class-properties",
    options: {
      loose: true,
    },
  });

  /**
   * Allows to use the experimental `export { default} from "mod"` proposal syntax.
   *
   * @see https://github.com/tc39/proposal-export-default-from
   * @see https://babeljs.io/docs/babel-plugin-proposal-export-default-from
   */
  actions.setBabelPlugin({ name: "@babel/plugin-proposal-export-default-from" });

  /**
   * Allows to use the "Nullish Coalescing" proposal trhough the experimental `??` operator to combine with the
   * "Optional Chaining" proposal operator.
   *
   * @see https://github.com/tc39/proposal-nullish-coalescing
   * @see https://babeljs.io/docs/babel-plugin-proposal-nullish-coalescing-operator
   */
  actions.setBabelPlugin({
    name: "@babel/plugin-proposal-nullish-coalescing-operator",
    options: {
      loose: false,
    },
  });

  /**
   * Allows to use the "Optional Chaining" proposal through the experimental `?.` operator in combination with the
   * "Nullish Coalescing" proposal operator.
   *
   * @see https://github.com/tc39/proposal-optional-chaining
   * @see https://babeljs.io/docs/babel-plugin-proposal-optional-chaining
   */
  actions.setBabelPlugin({
    name: "@babel/plugin-proposal-optional-chaining",
    options: {
      loose: false,
    },
  });

  if (isProductionMode) {
    /**
     * Removes unnecessary React `propTypes` from production builds to reduce bundle sizes and save bandwidth.
     *
     * @see https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types
     */
    actions.setBabelPlugin({
      name: "babel-plugin-transform-react-remove-prop-types",
      options: {
        removeImport: true,
        ignoreFilenames: ["node_modules"],
      },
    });

    /**
     * Removes unnecessary React properties from production builds to reduce bundle sizes and save bandwidth.
     *
     * @see https://github.com/oliviertassinari/babel-plugin-react-remove-properties
     */
    actions.setBabelPlugin({
      name: "babel-plugin-react-remove-properties",
      options: {
        properties: [
          /**
           * Remove all test IDs applied for `react-testing-library` to query elements in tests.
           *
           * @see https://github.com/kentcdodds/react-testing-library#getbytestid
           */
          "data-testid",
        ],
      },
    });
  }
};

/**
 * Implementation of the Gatsby Node `onCreateBabelConfig` API.
 * Allows to let plugins extend/mutate the project's Babel configuration.
 * @see https://babeljs.io
 * @since 0.1.0
 */
module.exports = onCreateBabelConfig;
