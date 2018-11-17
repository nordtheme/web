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

module.exports = {
  extends: "arcticicestudio",
  env: {
    browser: true,
    node: true
  },
  rules: {
    "no-confusing-arrow": "off",
    /* Suppress errors when importing development dependencies */
    "import/no-extraneous-dependencies": ["error", { devDependencies: ["./.gatsby/**/*.js"] }]
  }
};
