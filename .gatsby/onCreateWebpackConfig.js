/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const GitRevisionPlugin = require("git-revision-webpack-plugin");
const { resolve: resolvePath } = require("path");

const { BASE_DIR_BUILD_REPORTS } = require("../src/config/internal/constants");

const r = (m) => resolvePath(__dirname, m);

/**
 * Configuration for the `webpack-bundle-analyzer` plugin.
 * @type {object}
 * @since 0.1.0
 * @see https://github.com/webpack-contrib/webpack-bundle-analyzer
 */
const bundleAnalyzerPluginConfig = {
  analyzerMode: "static",
  generateStatsFile: true,
  openAnalyzer: false,
  reportFilename: r(`../${BASE_DIR_BUILD_REPORTS}/webpack-bundle-analyzer/index.html`),
  statsFilename: r(`../${BASE_DIR_BUILD_REPORTS}/webpack-bundle-analyzer/stats.json`),
};

/**
 * Configuration for the `git-revision-webpack-plugin` plugin.
 *
 * @type {object}
 * @since 0.1.0
 * @see https://github.com/pirelenito/git-revision-webpack-plugin
 */
const gitRevisionPluginConfig = {
  branch: true,
};

const gitRevisionPlugin = new GitRevisionPlugin(gitRevisionPluginConfig);

/**
 * Configuration for `webpack.DefinePlugin`.
 *
 * @type {object}
 * @since 0.1.0
 * @see https://webpack.js.org/plugins/define-plugin
 */
const definePluginConfig = {
  "process.env.NORD_DOCS_GIT_VERSION": JSON.stringify(gitRevisionPlugin.version()),
  "process.env.NORD_DOCS_GIT_COMMITHASH": JSON.stringify(gitRevisionPlugin.commithash()),
  "process.env.NORD_DOCS_GIT_BRANCH": JSON.stringify(gitRevisionPlugin.branch()),
};

/**
 * Implementation of the Gatsby Node `onCreateWebpackConfig` API.
 * @method onCreateWebpackConfig
 * @param {object} actions Collection of functions provided by Gatsby used to manipulate the state of the build
 * @param {string} stage The name of the current Gatsby build process stage.
 * @since 0.1.0
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreateWebpackConfig
 * @see https://webpack.js.org/plugins/define-plugin/
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
        hooks: r("../src/hooks/"),
        layouts: r("../src/components/layouts/"),
        molecules: r("../src/components/molecules/"),
        organisms: r("../src/components/organisms/"),
        pages: r("../src/pages/"),
        stores: r("../src/stores/"),
        styles: r("../src/styles/"),
        templates: r("../src/components/templates/"),
        utils: r("../src/utils/"),
      },
    },
  });

  switch (stage) {
    case "build-html":
    case "build-javascript":
      actions.setWebpackConfig({
        plugins: [new BundleAnalyzerPlugin(bundleAnalyzerPluginConfig), new GitRevisionPlugin(), new webpack.DefinePlugin(definePluginConfig)],
      });
      break;
    case "develop":
      actions.setWebpackConfig({
        plugins: [new webpack.DefinePlugin(definePluginConfig)],
      });
      break;
  }
};

/**
 * Implementation of Gatsby Node `onCreateWebpackConfig` API.
 * Allows to let plugins extend/mutate the project's webpack configuration.
 * @see https://webpack.js.org
 * @since 0.1.0
 */
module.exports = onCreateWebpackConfig;
