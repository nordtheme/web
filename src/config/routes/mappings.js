/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides route mapping constants.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.1.0
 */

const { ROOT, BLOG, DOCS, LANDING } = require("./constants");

/**
 * The root route mapping.
 *
 * @constant {string}
 * @since 0.1.0
 */
const ROUTE_ROOT = ROOT;

/**
 * The route mapping for the "blog" page.
 *
 * @constant {string}
 * @since 0.1.0
 */
const ROUTE_BLOG = ROUTE_ROOT + BLOG;

/**
 * The route mapping for the "docs" page.
 *
 * @constant {string}
 * @since 0.1.0
 */
const ROUTE_DOCS = ROUTE_ROOT + DOCS;

/**
 * The route mapping for the landing page.
 * Alias that will be redirected to {@link ROUTE_ROOT}.
 *
 * @constant {string}
 * @since 0.1.0
 */
const ROUTE_LANDING = ROUTE_ROOT + LANDING;

module.exports = {
  ROUTE_ROOT,
  ROUTE_BLOG,
  ROUTE_DOCS,
  ROUTE_LANDING
};
