/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Implementation of Gatsby Node `onCreateWebpackConfig` API.
 * Allows to let plugins extend/mutate the project's webpack configuration.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://webpack.js.org
 * @since 0.1.0
 */

const { resolve: resolvePath } = require("path");
/* eslint-disable import/no-extraneous-dependencies */
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
/* eslint-enable import/no-extraneous-dependencies */

const r = m => resolvePath(__dirname, m);

/**
 * Configuration for the `webpack-bundle-analyzer` plugin.
 *
 * @type {object}
 * @since 0.1.0
 */
const bundleAnalyzerPluginConfig = {
  analyzerMode: "static",
  generateStatsFile: true,
  openAnalyzer: false,
  reportFilename: r("../build/reports/webpack-bundle-analyzer/index.html"),
  statsFilename: r("../build/reports/webpack-bundle-analyzer/stats.json")
};

/**
 * Implementation of the Gatsby Node `onCreateWebpackConfig` API.
 *
 * @method onCreateWebpackConfig
 * @param  {object} actions Collection of functions provided by Gatsby used to manipulate the state of the build
 * @param  {string} stage The name of the current Gatsby build process stage.
 * @see https://gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
 * @see https://gatsbyjs.org/docs/actions/#setWebpackConfig
 * @since 0.1.0
 */
const onCreateWebpackConfig = ({ actions, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        assets: r("../src/assets/"),
        atoms: r("../src/components/atoms/"),
        config: r("../src/config/"),
        containers: r("../src/components/containers/"),
        data: r("../src/data/"),
        layouts: r("../src/components/layouts/"),
        molecules: r("../src/components/molecules/"),
        organisms: r("../src/components/organisms/"),
        pages: r("../src/components/pages/"),
        stores: r("../src/stores/"),
        styles: r("../src/styles/"),
        templates: r("../src/components/templates/"),
        utils: r("../src/utils/")
      }
    }
  });

  switch (stage) {
    case "build-html":
    case "build-javascript":
      actions.setWebpackConfig({
        plugins: [new BundleAnalyzerPlugin(bundleAnalyzerPluginConfig)]
      });
      break;
  }
};

module.exports = onCreateWebpackConfig;
