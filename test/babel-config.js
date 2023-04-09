/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

const jestBabelConfig = {
  presets: ["babel-preset-gatsby"],
  plugins: ["@babel/plugin-proposal-optional-chaining", "@babel/plugin-proposal-export-default-from"],
};

/**
 * Babel configurations for Jest.
 * @since 0.1.0
 * @see https://jestjs.io/docs/getting-started#using-babel
 * @see https://www.gatsbyjs.com/docs/how-to/testing
 */
module.exports = require("babel-jest").createTransformer(jestBabelConfig);
