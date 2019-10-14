/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file The configuration for the Gatsby plugin `gatsby-plugin-mdx`.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 * @see https://mdxjs.com
 * @see https://www.gatsbyjs.org/docs/mdx
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-mdx
 */

const remarkBreaks = require("remark-breaks");
const remarkGitHub = require("remark-github");
const rehypeSlug = require("rehype-slug");

const { metadataNordDocs } = require("../../src/data/project");

const remarkGitHubOptions = {
  repository: `${metadataNordDocs.repository.url}`,
  mentionStrong: false
};

module.exports = {
  defaultLayouts: {
    blog: require.resolve("../../src/components/templates/blog/BlogPost.jsx"),
    docs: require.resolve("../../src/components/templates/docs/DocsPage.jsx")
  },
  footnotes: true,
  gatsbyRemarkPlugins: [],
  rehypePlugins: [rehypeSlug],
  remarkPlugins: [remarkBreaks, [remarkGitHub, remarkGitHubOptions]]
};
