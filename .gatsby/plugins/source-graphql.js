/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file The configuration for the Gatsby plugin `gatsby-source-graphql` using the read-only token to fetch public data
 * from the GitHub GraphQL API
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 * @see https://developer.github.com/v4
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-graphql
 */

module.exports = {
  typeName: "GitHub",
  fieldName: "github",
  url: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${process.env.NORD_DOCS_GITHUB_API_TOKEN_READONLY_PUBLIC}`
  }
};
