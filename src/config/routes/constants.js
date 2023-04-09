/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

const { metadataNord } = require("../../data/project");

/**
 * The default path separator.
 * @constant {string}
 * @since 0.1.0
 */
const pathSeparator = "/";

/**
 * The public base URL of the site.
 * The value can be injected through the {@linkcode NORD_DOCS_BASE_PUBLIC_URL} environment
 * variable during compile time, otherwise defaults to the specified homepage of the project.
 * @constant {string}
 * @since 0.1.0
 */
const BASE_PUBLIC_URL = process.env.NORD_DOCS_BASE_PUBLIC_URL || `${metadataNord.homepage}`;

/**
 * The root route name.
 * @constant {string}
 * @since 0.1.0
 */
const ROOT = pathSeparator;

/**
 * The route name of the `blog` page.
 * @constant {string}
 * @since 0.1.0
 */
const BLOG = "blog";

/**
 * The route name of the `community` page.
 * @constant {string}
 * @since 0.3.0
 */
const COMMUNITY = "community";

/**
 * The route name of the `docs` page.
 * @constant {string}
 * @since 0.1.0
 */
const DOCS = "docs";

/**
 * The route name of the `docs` page about Nord's colors and palettes.
 * @constant {string}
 * @since 0.11.0
 */
const DOCS_COLORS_AND_PALETTES = "colors-and-palettes";

/**
 * The route name of the `docs` page about Nord's color swatches.
 * @constant {string}
 * @since 0.11.0
 */
const DOCS_SWATCHES = "swatches";

/**
 * The route name of the `docs` page about Nord's installation and usage.
 * @constant {string}
 * @since 0.11.0
 */
const DOCS_USAGE = "usage";

/**
 * The route name of the landing page.
 * Alias that will be redirected to the {@link ROOT} route.
 * @constant {string}
 * @since 0.1.0
 */
const LANDING = "landing";

/**
 * The route name of the port projects page.
 * @constant {string}
 * @since 0.3.0
 */
const PORTS = "ports";

/**
 * Provides routing constants.
 * @since 0.1.0
 */
module.exports = {
  BASE_PUBLIC_URL,
  BLOG,
  COMMUNITY,
  DOCS,
  DOCS_COLORS_AND_PALETTES,
  DOCS_SWATCHES,
  DOCS_USAGE,
  LANDING,
  PORTS,
  ROOT,
};
