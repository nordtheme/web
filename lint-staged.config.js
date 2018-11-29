/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file The lint-staged configuration.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://github.com/okonet/lint-staged#configuration
 */

module.exports = {
  "*.{js,json,jsx,md,mdx,yml}": "prettier --list-different",
  "*.{js,jsx}": "eslint --ext .js,.jsx",
  "*.md": "remark --no-stdout"
};
