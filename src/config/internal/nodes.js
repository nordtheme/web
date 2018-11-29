/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides internally used data about custom Gatsby GraphQL API nodes.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.1.0
 */

/**
 * The names of the source instance types and their paths relative to the project root path.
 *
 * @type {Object}
 * @since 0.1.0
 */
const sourceInstanceTypes = {
  blog: { id: "blog", path: "blog" },
  docs: { id: "docs", path: "docs" }
};

/**
 * The additional fields added to nodes with the Gatsby Node `onCreateNode` API.
 *
 * @type {Object}
 * @see https://gatsbyjs.org/docs/node-apis
 * @see https://next.gatsbyjs.org/docs/node-apis/#onCreateNode
 * @since 0.1.0
 */
const nodeFields = {
  /**
   * The date a blog post has been created.
   */
  date: {
    name: "date",
    type: "string",
    targetContentSourceTypes: [sourceInstanceTypes.blog.id]
  },
  /**
   * The content type of the node based on the source instance of the configured `gatsby-source-filesystem` Gatsby
   * plugin.
   */
  contentSourceType: {
    name: "contentSourceType",
    type: "string",
    targetContentSourceTypes: [...Object.keys(sourceInstanceTypes).map(name => sourceInstanceTypes[name].id)]
  },
  /**
   * The slug of the node without the prepended parent route.
   */
  slug: {
    name: "slug",
    type: "string",
    targetContentSourceTypes: [...Object.keys(sourceInstanceTypes).map(name => sourceInstanceTypes[name].id)]
  },
  /**
   * The relative directory of the node.
   */
  relativeDirectory: {
    name: "relativeDirectory",
    type: "string",
    targetContentSourceTypes: [...Object.keys(sourceInstanceTypes).map(name => sourceInstanceTypes[name].id)]
  },
  /**
   * The slug of the parent route based on the content source type.
   */
  slugParentRoute: {
    name: "slugParentRoute",
    type: "string",
    targetContentSourceTypes: [...Object.keys(sourceInstanceTypes).map(name => sourceInstanceTypes[name].id)]
  }
};

module.exports = { nodeFields, sourceInstanceTypes };
