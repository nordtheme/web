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

const r = m => resolvePath(__dirname, m);

/**
 * Implementation of the Gatsby Node `onCreateWebpackConfig` API.
 *
 * @method onCreateWebpackConfig
 * @param  {object} actions Collection of functions provided by Gatsby used to manipulate the state of the build
 * process.
 * @see https://gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
 * @see https://gatsbyjs.org/docs/actions/#setWebpackConfig
 * @since 0.1.0
 */
const onCreateWebpackConfig = ({ actions }) => {
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
};

module.exports = onCreateWebpackConfig;
