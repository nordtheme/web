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
 * @see https://eslint.org/docs/user-guide/configuring#specifying-environments
 */

const { resolve } = require("path");
/* eslint-disable import/no-extraneous-dependencies */
const {
  rules: { "import/no-extraneous-dependencies": noExtraneousDependencies }
} = require("eslint-config-arcticicestudio-base/rules/import/helpful-warnings");
/* eslint-enable import/no-extraneous-dependencies */

module.exports = {
  extends: "arcticicestudio",
  plugins: ["babel", "prettier"],
  parser: "babel-eslint",
  env: {
    browser: true,
    jest: true,
    node: true
  },
  settings: {
    "import/resolver": {
      jest: {
        jestConfigFile: resolve(__dirname, "jest.config.js")
      },
      node: {
        /* Resolve Webpack alias imports */
        paths: [resolve(__dirname, "src"), resolve(__dirname, "src/components")]
      }
    }
  },
  rules: {
    "prettier/prettier": "error",
    "no-confusing-arrow": "off",
    "react/display-name": "off",
    /* Also suppress errors when importing development dependencies in project specific scripts. */
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: noExtraneousDependencies[1].devDependencies.concat(["**/.gatsby/**"])
      }
    ],
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
