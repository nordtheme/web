/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Configurations for lint-staged.
 * @see https://github.com/okonet/lint-staged#configuration
 */
module.exports = {
  "*.{json,mdx,svg,yaml,yml}": "prettier --check --ignore-unknown --no-editorconfig",
  "*.{js,jsx,mjs}": ["eslint --ext .js,.jsx", "prettier --check --ignore-unknown --no-editorconfig"],
  "*.md": ["remark --no-stdout", "prettier --check --ignore-unknown --no-editorconfig"],
  ".husky/pre-*": "prettier --check --ignore-unknown --no-editorconfig",
};
