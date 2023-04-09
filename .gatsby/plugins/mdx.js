/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

const remarkBreaks = require("remark-breaks");
const remarkGitHub = require("remark-github");
const rehypeSlug = require("rehype-slug");

const { metadataNordDocs } = require("../../src/data/project");

const remarkGitHubOptions = {
  repository: `${metadataNordDocs.repository.url}`,
  mentionStrong: false,
};

/**
 * The configuration for the Gatsby plugin `gatsby-plugin-mdx`.
 * @since 0.10.0
 * @see https://mdxjs.com
 * @see https://www.gatsbyjs.com/docs/how-to/routing/mdx
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-mdx
 */
module.exports = {
  defaultLayouts: {
    blog: require.resolve("../../src/components/templates/blog/BlogPost.jsx"),
    docs: require.resolve("../../src/components/templates/docs/DocsPage.jsx"),
  },
  footnotes: true,
  gatsbyRemarkPlugins: [],
  rehypePlugins: [rehypeSlug],
  remarkPlugins: [remarkBreaks, [remarkGitHub, remarkGitHubOptions]],
};
