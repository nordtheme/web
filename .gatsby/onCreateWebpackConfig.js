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
const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const GitRevisionPlugin = require("git-revision-webpack-plugin");
/* eslint-enable import/no-extraneous-dependencies */

const r = m => resolvePath(__dirname, m);

/**
 * Configuration for the `webpack-bundle-analyzer` plugin.
 *
 * @type {object}
 * @see https://github.com/webpack-contrib/webpack-bundle-analyzer
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
 * Configuration for the `git-revision-webpack-plugin` plugin.
 *
 * @type {object}
 * @see https://github.com/pirelenito/git-revision-webpack-plugin
 * @since 0.1.0
 */
const gitRevisionPluginConfig = {
  branch: true
};

const gitRevisionPlugin = new GitRevisionPlugin(gitRevisionPluginConfig);

/**
 * Configuration for `webpack.DefinePlugin`.
 *
 * @type {object}
 * @see https://webpack.js.org/plugins/define-plugin
 * @since 0.1.0
 */
const definePluginConfig = {
  "process.env.NORD_DOCS_GIT_VERSION": JSON.stringify(gitRevisionPlugin.version()),
  "process.env.NORD_DOCS_GIT_COMMITHASH": JSON.stringify(gitRevisionPlugin.commithash()),
  "process.env.NORD_DOCS_GIT_BRANCH": JSON.stringify(gitRevisionPlugin.branch())
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
        plugins: [
          new BundleAnalyzerPlugin(bundleAnalyzerPluginConfig),
          new GitRevisionPlugin(),
          new webpack.DefinePlugin(definePluginConfig)
        ]
      });
      break;
    case "develop":
      actions.setWebpackConfig({
        plugins: [new webpack.DefinePlugin(definePluginConfig)]
      });
      break;
  }
};

module.exports = onCreateWebpackConfig;
