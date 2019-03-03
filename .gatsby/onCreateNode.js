/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

const { createFilePath } = require("gatsby-source-filesystem");

const { nodeFields, sourceInstanceTypes } = require("../src/config/internal/nodes");
const { BASE_DIR_CONTENT, NODE_TYPE_MDX, REGEX_BLOG_POST_DATE } = require("../src/config/internal/constants");
const { ROUTE_BLOG, ROUTE_DOCS } = require("../src/config/routes/mappings");

/**
 * Extracts the date of a blog post from the given path using the `REGEX_BLOG_POST_DATE` regular expression.
 * Note that the returned date is in UTC format to be independent of the time zone. The exact time of the day will be
 * parsed from the blog posts frontmatter "publishTime" field.
 *
 * @private
 * @method extractDateFromPath
 * @param  {string} path The path from which the blog post date should be extracted.
 * @return {string|null} The extracted blog post date in UTC format as JSON string if the given path matches the
 * regular expression, `null` otherwise.
 */
const extractBlogPostDateFromPath = path => {
  const date = REGEX_BLOG_POST_DATE.exec(path);
  return date ? new Date(Date.UTC(date[1], date[2] - 1, date[3])).toJSON() : null;
};

/**
 * Implementation of the Gatsby Node "onCreateNode" API which gets called when a new node is created.
 * Allows plugins to extend or transform nodes created by other plugins.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 * @see https://next.gatsbyjs.org/docs/node-apis/#onCreateNode
 * @see https://next.gatsbyjs.org/docs/actions/#createNode
 * @see https://next.gatsbyjs.org/docs/actions/#createNodeField
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-filesystem#createfilepath
 */
const onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === NODE_TYPE_MDX) {
    const contentFileResourceSlug = createFilePath({
      node,
      getNode,
      basePath: `${BASE_DIR_CONTENT}`,
      trailingSlash: false
    });
    const { relativeDirectory, relativePath, sourceInstanceName } = getNode(node.parent);

    if (sourceInstanceName === sourceInstanceTypes.blog.id) {
      const date = extractBlogPostDateFromPath(relativePath);

      if (!date) {
        throw Error(
          `Blog post content resource path '${relativePath}' doesn't match the required date-based directory structure: ${REGEX_BLOG_POST_DATE}`
        );
      }

      createNodeField({
        node,
        name: `${nodeFields.date.name}`,
        value: extractBlogPostDateFromPath(relativePath)
      });
      createNodeField({
        node,
        name: `${nodeFields.contentSourceType.name}`,
        value: `${sourceInstanceTypes.blog.id}`
      });
      createNodeField({
        node,
        name: `${nodeFields.relativeDirectory.name}`,
        value: `${relativeDirectory}`
      });
      createNodeField({
        node,
        name: `${nodeFields.slug.name}`,
        value: `${contentFileResourceSlug}`
      });
      createNodeField({
        node,
        name: `${nodeFields.slugParentRoute.name}`,
        value: `${ROUTE_BLOG}`
      });
    }

    if (sourceInstanceName === sourceInstanceTypes.docs.id) {
      createNodeField({
        node,
        name: `${nodeFields.contentSourceType.name}`,
        value: `${sourceInstanceTypes.docs.id}`
      });
      createNodeField({
        node,
        name: `${nodeFields.relativeDirectory.name}`,
        value: `${relativeDirectory}`
      });
      createNodeField({
        node,
        name: `${nodeFields.slug.name}`,
        value: contentFileResourceSlug
      });
      createNodeField({
        node,
        name: `${nodeFields.slugParentRoute.name}`,
        value: `${ROUTE_DOCS}`
      });
    }
  }
};

module.exports = onCreateNode;
