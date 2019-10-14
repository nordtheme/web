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

module.exports = {
  parser: "babel-eslint",
  extends: [
    "@arcticicestudio/eslint-config",
    "@arcticicestudio/eslint-config/react-hooks",
    "@arcticicestudio/eslint-config/prettier"
  ],
  plugins: ["babel"],
  env: {
    browser: true,
    jest: true,
    node: true
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["assets", resolve(__dirname, "src", "assets")],
          ["atoms", resolve(__dirname, "src", "components", "atoms")],
          ["config", resolve(__dirname, "src", "config")],
          ["containers", resolve(__dirname, "src", "components", "containers")],
          ["data", resolve(__dirname, "src", "data")],
          ["hooks", resolve(__dirname, "src", "hooks")],
          ["layouts", resolve(__dirname, "src", "components", "layouts")],
          ["molecules", resolve(__dirname, "src", "components", "molecules")],
          ["organisms", resolve(__dirname, "src", "components", "organisms")],
          ["pages", resolve(__dirname, "src", "pages")],
          ["styles", resolve(__dirname, "src", "styles")],
          ["templates", resolve(__dirname, "src", "components", "templates")],
          ["utils", resolve(__dirname, "src", "utils")]
        ]
      },
      jest: {
        jestConfigFile: resolve(__dirname, "jest.config.js")
      },
      node: {
        /* Resolve Webpack alias imports */
        paths: [resolve(__dirname, "src"), resolve(__dirname, "src", "components")]
      }
    }
  },
  rules: {
    /*
     * Enable support for experimental features:
     *
     * - `babel/camelcase` - doesn't complain about optional chaining (`let foo = bar?.a_b;`).
     * - `babel/no-unused-expressions` - doesn't fail when using `do` expressions or optional chaining (`a?.b()`).
     */
    camelcase: "off",
    "babel/camelcase": "error",
    "no-unused-expressions": "off",
    "babel/no-unused-expressions": "error"
  },
  overrides: [
    {
      files: ["*.jsx"],
      rules: {
        /*
         * Defining multiple components per file is common when using CSS-in-JS, especially for scoped components
         * that are only used once.
         */
        "react/no-multi-comp": "off",
        /*
         * Spreading props reduces prop cluttering and can prevent bugs due to transitive/implicit props not being
         * passed to the target component
         */
        "react/jsx-props-no-spreading": "off"
      }
    },
    {
      /*
       * Allow to use development dependencies in Gatsby configuration files since these are necessary and will
       * be provided by either Gatsby itself or another without being explicitly defined as package dependency.
       */
      files: ["**/.gatsby/**/*.js"],
      rules: {
        "import/no-extraneous-dependencies": "off"
      }
    }
  ]
};
