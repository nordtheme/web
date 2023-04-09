/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * The configuration for the Gatsby plugin `gatsby-source-graphql` using the read-only token to fetch public data from the GitHub GraphQL API v4.
 * @since 0.9.0
 * @see https://docs.github.com/en/graphql
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-graphql
 */
module.exports = {
  typeName: "GitHub",
  fieldName: "github",
  url: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${process.env.NORD_DOCS_GITHUB_API_TOKEN_READONLY_PUBLIC}`,
  },
};
