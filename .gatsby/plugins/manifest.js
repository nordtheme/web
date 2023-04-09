/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/* eslint-disable babel/camelcase */

const { metadataNord } = require("../../src/data/project");
const { ROUTE_ROOT } = require("../../src/config/routes/mappings");

/**
 * The configuration for the Gatsby plugin `gatsby-plugin-manifest`.
 * @since 0.4.0
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest
 */
module.exports = {
  name: metadataNord.name,
  short_name: metadataNord.name,
  start_url: ROUTE_ROOT,
  background_color: "#d8dee9",
  theme_color: "#88c0d0",
  /**
   * Enables the "Add to Homescreen" prompt and disables browser UI (including back button)
   * @see https://web.dev/add-manifest/#display
   */
  display: "standalone",
  /* The relative path (starting from the project root) to the source icon all other favicons will be generated from. */
  icon: "src/assets/images/icons/favicon.svg",
  /* Enable support for legacy `apple-touch-icon` links. Support for the web app manifest specification was added first in iOS 11.3. */
  legacy: true,
};
