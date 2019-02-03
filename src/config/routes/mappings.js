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

const { BLOG, COMMUNITY, DOCS, LANDING, PORTS, ROOT } = require("./constants");

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
 * The route mapping for the "community" page.
 *
 * @constant {string}
 * @since 0.3.0
 */
const ROUTE_COMMUNITY = ROUTE_ROOT + COMMUNITY;

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

/**
 * The route mapping for the port projects page.
 *
 * @constant {string}
 * @since 0.3.0
 */
const ROUTE_PORTS = ROUTE_ROOT + PORTS;

/**
 * The per-route unique `id` attribute values of sections components.
 *
 * @constant {Object}
 * @since 0.6.0
 */
const SECTION_COMPONENT_IDS = {
  [ROUTE_COMMUNITY]: ["hero", "chat-channels", "content"],
  [ROUTE_DOCS]: ["hero", "contents"],
  [ROUTE_ROOT]: [
    "hero",
    "palettes-modularity",
    "palettes-contrast",
    "ports",
    "swatches",
    "syntax-highlighting",
    "community"
  ]
};

module.exports = {
  ROUTE_BLOG,
  ROUTE_COMMUNITY,
  ROUTE_DOCS,
  ROUTE_LANDING,
  ROUTE_PORTS,
  ROUTE_ROOT,
  SECTION_COMPONENT_IDS
};
