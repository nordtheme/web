/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides routing constants.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.1.0
 */

const { metadataNord } = require("../../data/project");

/**
 * The default path separator.
 *
 * @constant {string}
 * @since 0.1.0
 */
const pathSeparator = "/";

/**
 * The public base URL of the site.
 * The value can be injected through the {@linkcode NORD_DOCS_BASE_PUBLIC_URL} environment
 * variable during compile time, otherwise defaults to the specified homepage of the project.
 *
 * @constant {string}
 * @since 0.1.0
 */
const BASE_PUBLIC_URL = process.env.NORD_DOCS_BASE_PUBLIC_URL || `${metadataNord.homepage}`;

/**
 * The root route name.
 *
 * @constant {string}
 * @since 0.1.0
 */
const ROOT = pathSeparator;

/**
 * The route name of the "blog" page.
 *
 * @constant {string}
 * @since 0.1.0
 */
const BLOG = "blog";

/**
 * The route name of the "docs" page.
 *
 * @constant {string}
 * @since 0.1.0
 */
const DOCS = "docs";

/**
 * The route name of the landing page.
 * Alias that will be redirected to the {@link ROOT} route.
 *
 * @constant {string}
 * @since 0.1.0
 */
const LANDING = "landing";

module.exports = {
  BASE_PUBLIC_URL,
  BLOG,
  DOCS,
  LANDING,
  ROOT
};
