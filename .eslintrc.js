/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file The ESLint configuration.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://github.com/babel/eslint-plugin-babel#rules
 * @see https://github.com/tc39/proposal-optional-chaining
 */

const { resolve } = require("path");

module.exports = {
  extends: "arcticicestudio",
  plugins: ["babel"],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true
  },
  settings: {
    "import/resolver": {
      node: {
        /* Resolve Webpack alias imports */
        paths: [resolve(__dirname, "src"), resolve(__dirname, "src/components")]
      }
    }
  },
  rules: {
    "no-confusing-arrow": "off",
    /* Suppress errors when importing development dependencies */
    "import/no-extraneous-dependencies": ["error", { devDependencies: ["./.gatsby/**/*.js"] }],
    /*
     * Enable support for experimental features:
     *
     * - `babel/camelcase` - doesn't complain about optional chaining (`let foo = bar?.a_b;`).
     * - `babel/no-unused-expressions` - doesn't fail when using `do` expressions or optional chaining (`a?.b()`).
     */
    "babel/camelcase": "error",
    camelcase: "off",
    "babel/no-unused-expressions": "error",
    "no-unused-expressions": "off"
  }
};
