/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file The Jest configuration.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://jestjs.io/docs/en/configuration
 * @see https://www.gatsbyjs.org/docs/testing
 * @see https://circleci.com/docs/2.0/collect-test-data/#jest
 * @since 0.1.0
 */

const { BASE_DIR_BUILD_REPORTS_COVERAGE, BASE_DIR_BUILD_REPORTS_JUNIT } = require("./src/config/internal/constants");

module.exports = {
  /*
   * The directory where Jest should output its coverage files.
   */
  coverageDirectory: `<rootDir>/${BASE_DIR_BUILD_REPORTS_COVERAGE}`,

  /*
   * To ensure only relevant files are included in the coverage stats this array of glob patterns matches files for
   * which coverage information should be collected.
   */
  collectCoverageFrom: ["**/src/**/*.{js,jsx}", "!**/src/{config,data}/**", "!**/.cache/**", "!**/node_modules/**"],

  /*
   * A set of global variables that need to be available in all test environments. The `__PATH_PREFIX__` variable is
   * specific to Gatsby based projects which is necessary for some components.
   */
  globals: {
    __PATH_PREFIX__: ""
  },

  /*
   * A map from regular expressions to module names that allow to stub out resources, like images or styles with a
   * single module. It is also used to set up "resolve aliases" that reflect the same setup like the ones configured for
   * Gatsby's Webpack configuration.
   */
  moduleNameMapper: {
    /* Reflect Webpack's `resolve.alias` configuration. */
    "^atoms(.*)$": "<rootDir>/src/components/atoms$1",
    "^config(.*)$": "<rootDir>/src/config$1",
    "^containers(.*)$": "<rootDir>/src/components/containers$1",
    "^data(.*)$": "<rootDir>/src/data$1",
    "^layouts(.*)$": "<rootDir>/src/components/layouts$1",
    "^molecules(.*)$": "<rootDir>/src/components/molecules$1",
    "^nord-docs-test-utils(.*)$": "<rootDir>/test/__utils__$1",
    "^organisms(.*)$": "<rootDir>/src/components/organisms$1",
    "^pages(.*)$": "<rootDir>/src/pages$1",
    "^stores(.*)$": "<rootDir>/src/stores$1",
    "^styles(.*)$": "<rootDir>/src/styles$1",
    "^templates(.*)$": "<rootDir>/src/components/templates$1",
    "^utils(.*)$": "<rootDir>/src/utils$1",
    /* Map all import stylesheets to the "identity object proxy" module. */
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/__mocks__/file.js",
    /* Ensure React components loaded from SVG files are mocked correctly. */
    ".+\\.svg$": "<rootDir>/test/__mocks__/svgr.jsx"
  },

  /*
   * An array with paths to additional locations to search when resolving modules. This is useful to define test
   * specific utils which can then be imported like an aliased module.
   */
  modulePaths: ["<rootDir>/test/__utils__"],

  /*
   * An array of module names to specify which reporters will be used.
   */
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: `${BASE_DIR_BUILD_REPORTS_JUNIT}`,
        outputName: "jest.xml"
      }
    ]
  ],

  /*
   * The paths to modules that run some code to configure or set up the testing environment before each test.
   * The `___loader` shim is a global function used by internal Gatsby APIs.
   * Note that this is executed BEFORE the `setupFilesAfterEnv` option!
   */
  setupFiles: ["<rootDir>/test/__shims__/___loader.js"],

  /*
   * The path to the module that runs to configure or set up the testing framework before each test.
   * Note that this is executed AFTER the `setupFiles` option!
   */
  setupFilesAfterEnv: [require.resolve("./test/setup.js")],

  /*
   * An array of regexp pattern strings that are matched against all test paths before executing the test. If the test
   * path matches any of the patterns, it will be skipped.
   */
  testPathIgnorePatterns: ["node_modules", ".cache"],

  /*
   * To write tests using the latest ECMAScript syntax and
   * proposals, Babel must be in place and set up to transpile the sources before they are processed by Jest to run
   * them. This mapping from regular expressions to paths of transformers will transpile matching files with the
   * specified Babel config.
   * See the linked Jest documentation about how to use Jest with Babel for more details.
   *
   * @see https://jestjs.io/docs/en/getting-started#using-babel
   */
  transform: {
    "^.+\\.jsx?$": "<rootDir>/test/babel-config.js"
  },

  /*
   * This is an important and required option for Gatsby based projects since Gastby includes un-transpiled ES6 code
   * and by default Jest doesn't try to transform code inside `node_modules`, therefore the` gatsby-browser-entry.js`
   * file isn't transpiled before running Jest so the `gatsby` module must be excluded.
   * This array of regexp pattern strings that are matched against all source file paths before transformation. If the
   * test path matches any of the patterns, it will not be transformed.
   */
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"]
};
