/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Implementation of the Gatsby Node `onCreateBabelConfig` API.
 * Allows to let plugins extend/mutate the project's Babel configuration.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://gatsbyjs.org/docs/node-apis/#onCreateBabelConfig
 * @see https://babeljs.io
 * @since 0.1.0
 */

/**
 * Implementation of the Gatsby Node `onCreateBabelConfig` API.
 *
 * @method onCreateBabelConfig
 * @param  {object} actions Collection functions provided by Gatsby used to manipulate the state of the build process.
 * @see https://gatsbyjs.org/docs/node-apis/#onCreateBabelConfig
 * @see https://gatsbyjs.org/docs/actions
 * @since 0.1.0
 */
const onCreateBabelConfig = ({ actions }) => {
  /*
   * Allows to use the "ES Class Fields & Static Properties" proposal to transforms static class properties as well as
   * properties declared with the experimental property initializer syntax.
   *
   * References:
   * - https://github.com/tc39/proposal-class-fields
   * - https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
   */
  actions.setBabelPlugin({
    name: "@babel/plugin-proposal-class-properties",
    options: {
      loose: true
    }
  });

  /*
   * Allows to use the experimental `export { default} from "mod"` proposal syntax.
   *
   * References:
   * - https://github.com/tc39/proposal-export-default-from
   * - https://babeljs.io/docs/en/babel-plugin-proposal-export-default-from
   */
  actions.setBabelPlugin({ name: "@babel/plugin-proposal-export-default-from" });

  /*
   * Allows to use the "Nullish Coalescing" proposal trhough the experimental `??` operator to combine with the
   * "Optional Chaining" proposal operator.
   *
   * References:
   * - https://github.com/tc39/proposal-nullish-coalescing
   * - https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator
   */
  actions.setBabelPlugin({
    name: "@babel/plugin-proposal-nullish-coalescing-operator",
    options: {
      loose: false
    }
  });

  /*
   * Allows to use the "Optional Chaining" proposal through the experimental `?.` operator in combination with the
   * "Nullish Coalescing" proposal operator.
   *
   * References:
   * - https://github.com/tc39/proposal-optional-chaining
   * - https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining
   */
  actions.setBabelPlugin({
    name: "@babel/plugin-proposal-optional-chaining",
    options: {
      loose: false
    }
  });
};

module.exports = onCreateBabelConfig;
