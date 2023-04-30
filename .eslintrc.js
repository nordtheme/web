/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

const { resolve } = require("path");

/**
 * Configurations for ESLint.
 * @see https://eslint.org/docs/latest/use/configure
 * @see https://eslint.org/docs/latest/use/configure/#using-configuration-files
 * @see https://eslint.org/docs/latest/use/configure/#specifying-environments
 * @see https://eslint.org/docs/latest/rules
 * @see https://github.com/babel/eslint-plugin-babel#rules
 * @see https://github.com/tc39/proposal-optional-chaining
 */
module.exports = {
  parser: "babel-eslint",
  extends: [
    "@svengreb/eslint-config",
    "@svengreb/eslint-config/react-hooks",
    /*
     * Enable support for projects using Prettier.
     * Note that this must always be placed after the `@svengreb/eslint-config-base` preset to take precedence, otherwise it won't prevent errors
     * due to useless and possibly conflicting rules!
     */
    "@svengreb/eslint-config-base/prettier",
  ],
  plugins: ["babel"],
  env: {
    browser: true,
    jest: true,
    node: true,
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
          ["utils", resolve(__dirname, "src", "utils")],
        ],
      },
      jest: {
        jestConfigFile: resolve(__dirname, "jest.config.js"),
      },
      node: {
        /* Resolve Webpack alias imports */
        paths: [resolve(__dirname, "src"), resolve(__dirname, "src", "components")],
      },
    },
  },
  rules: {
    /*
     * Enable support for experimental features:
     *   - `babel/camelcase` - doesn't complain about optional chaining (`let foo = bar?.a_b;`).
     *   - `babel/no-unused-expressions` - doesn't fail when using `do` expressions or optional chaining (`a?.b()`).
     */
    camelcase: "off",
    "babel/camelcase": "error",
    "no-unused-expressions": "off",
    "babel/no-unused-expressions": "error",
  },
  overrides: [
    {
      files: ["*.jsx"],
      rules: {
        /*
         * Defining multiple components per file is common when using CSS-in-JS, especially for scoped components that are only used once.
         */
        "react/no-multi-comp": "off",
        /*
         * Spreading props reduces prop cluttering and can prevent bugs due to transitive/implicit props not being passed to the target component.
         */
        "react/jsx-props-no-spreading": "off",
      },
    },
    {
      /*
       * Allow to use development dependencies in Gatsby configuration files since these are necessary and will be provided by either Gatsby itself or
       * another without being explicitly defined as package dependency.
       */
      files: ["**/.gatsby/**/*.js"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
