/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

const glob = require("glob");
const { createFilePath } = require("gatsby-source-filesystem");
const { dirname } = require("path");
const { existsSync } = require("fs");

const { nodeFields, optionalBlogPostImages, optionalBlogPostVideos, requiredBlogPostImages, sourceInstanceTypes } = require("../src/config/internal/nodes");
const { BASE_DIR_CONTENT, NODE_TYPE_IMAGE_SHARP, NODE_TYPE_MDX, REGEX_BLOG_POST_DATE } = require("../src/config/internal/constants");
const { ROUTE_BLOG, ROUTE_DOCS } = require("../src/config/routes/mappings");

const extractBlogPostDateFromPath = (path) => {
  const date = REGEX_BLOG_POST_DATE.exec(path);
  return date ? `${date[1]}-${date[2]}-${date[3]}` : null;
};

/**
 * Extracts the date of a blog post from the given path using the `REGEX_BLOG_POST_DATE` regular expression.
 * The exact time of the day will be parsed from the blog posts frontmatter "publishTime" field.
 * @private
 * @method extractBlogPostDateFromPath
 * @param  {string} path The path from which the blog post date should be extracted.
 * @return {string|null} The extracted blog post date if the given path matches the regular expression,
 * `null` otherwise.
 */
const onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === NODE_TYPE_MDX) {
    const contentFileResourceSlug = createFilePath({
      node,
      getNode,
      basePath: `${BASE_DIR_CONTENT}`,
      trailingSlash: false,
    });
    const { absolutePath, relativeDirectory, relativePath, sourceInstanceName } = getNode(node.parent);

    if (sourceInstanceName === sourceInstanceTypes.blog.id) {
      const date = extractBlogPostDateFromPath(relativePath);

      if (!date) {
        throw Error(`Blog post content resource path '${relativePath}' doesn't match the required date-based directory structure: ${REGEX_BLOG_POST_DATE}`);
      }

      /* Check for required blog post images and generate node fields. */
      Object.keys(requiredBlogPostImages).forEach((image) => {
        const { name, nodeFieldName } = requiredBlogPostImages[image];
        const matches = glob.sync(`${dirname(absolutePath)}/${name}.?(png|jpg|jpeg)`);

        if (!matches.length) {
          throw Error(`Required '${name}.(png|jpg|jpeg)' image not found for blog post '${relativeDirectory}'!`);
        }
        if (existsSync(matches[0])) {
          createNodeField({
            node,
            name: nodeFieldName,
            value: matches[0],
          });
        }
      });

      /* Check for optional blog post images and generate node fields. */
      Object.keys(optionalBlogPostImages).forEach((image) => {
        const { name, nodeFieldName } = optionalBlogPostImages[image];
        const matches = glob.sync(`${dirname(absolutePath)}/${name}.?(png|jpg|jpeg)`);

        if (existsSync(matches[0])) {
          createNodeField({
            node,
            name: nodeFieldName,
            value: matches[0],
          });
        }
      });

      /* Check for optional blog post videos and generate node fields. */
      Object.keys(optionalBlogPostVideos).forEach((video) => {
        const { name, nodeFieldName } = optionalBlogPostVideos[video];
        const matches = glob.sync(`${dirname(absolutePath)}/${name}.?(mp4|webm)`);
        if (existsSync(matches[0])) {
          createNodeField({
            node,
            name: nodeFieldName,
            value: matches[0],
          });
        }
      });

      createNodeField({
        node,
        name: `${nodeFields.date.name}`,
        value: date,
      });
      createNodeField({
        node,
        name: `${nodeFields.contentSourceType.name}`,
        value: `${sourceInstanceTypes.blog.id}`,
      });
      createNodeField({
        node,
        name: `${nodeFields.relativeDirectory.name}`,
        value: `${relativeDirectory}`,
      });
      createNodeField({
        node,
        name: `${nodeFields.slug.name}`,
        value: `${contentFileResourceSlug}`,
      });
      createNodeField({
        node,
        name: `${nodeFields.slugParentRoute.name}`,
        value: `${ROUTE_BLOG}`,
      });
    }

    if (sourceInstanceName === sourceInstanceTypes.docs.id) {
      createNodeField({
        node,
        name: `${nodeFields.contentSourceType.name}`,
        value: `${sourceInstanceTypes.docs.id}`,
      });
      createNodeField({
        node,
        name: `${nodeFields.relativeDirectory.name}`,
        value: `${relativeDirectory}`,
      });
      createNodeField({
        node,
        name: `${nodeFields.slug.name}`,
        value: contentFileResourceSlug,
      });
      createNodeField({
        node,
        name: `${nodeFields.slugParentRoute.name}`,
        value: `${ROUTE_DOCS}`,
      });
    }
  }

  if (node.internal.type === NODE_TYPE_IMAGE_SHARP) {
    const contentFileResourceSlug = createFilePath({
      node,
      getNode,
      basePath: `${BASE_DIR_CONTENT}`,
      trailingSlash: false,
    });
    const { relativeDirectory, sourceInstanceName } = getNode(node.parent);

    if (sourceInstanceName === sourceInstanceTypes.images.id) {
      createNodeField({
        node,
        name: `${nodeFields.contentSourceType.name}`,
        value: `${sourceInstanceTypes.images.id}`,
      });
      createNodeField({
        node,
        name: `${nodeFields.relativeDirectory.name}`,
        value: `${relativeDirectory}`,
      });
      createNodeField({
        node,
        name: `${nodeFields.slug.name}`,
        value: contentFileResourceSlug,
      });
    }

    if (sourceInstanceName === sourceInstanceTypes.videos.id) {
      createNodeField({
        node,
        name: `${nodeFields.contentSourceType.name}`,
        value: `${sourceInstanceTypes.videos.id}`,
      });
      createNodeField({
        node,
        name: `${nodeFields.relativeDirectory.name}`,
        value: `${relativeDirectory}`,
      });
      createNodeField({
        node,
        name: `${nodeFields.slug.name}`,
        value: contentFileResourceSlug,
      });
    }
  }
};

/**
 * Implementation of the Gatsby Node "onCreateNode" API which gets called when a new node is created.
 * Allows plugins to extend or transform nodes created by other plugins.
 * @since 0.10.0
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreateNode
 * @see https://www.gatsbyjs.com/docs/reference/config-files/actions/#createNode
 * @see https://www.gatsbyjs.com/docs/reference/config-files/actions/#createNodeField
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-filesystem#createfilepath
 */
module.exports = onCreateNode;
