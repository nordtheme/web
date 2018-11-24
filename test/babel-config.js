/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file The Babel configuration for Jest.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://jestjs.io/docs/en/getting-started#using-babel
 * @see https://www.gatsbyjs.org/docs/testing
 * @since 0.1.0
 */

const jestBabelConfig = {
  presets: ["babel-preset-gatsby"]
};

module.exports = require("babel-jest").createTransformer(jestBabelConfig);
