/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * @file Implementation of the Gatsby Node APIs.
 * @since 0.1.0
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node
 */

exports.onCreateBabelConfig = require("./.gatsby/onCreateBabelConfig");
exports.onCreateWebpackConfig = require("./.gatsby/onCreateWebpackConfig");
exports.onCreateNode = require("./.gatsby/onCreateNode");
exports.createPages = require("./.gatsby/createPages");
