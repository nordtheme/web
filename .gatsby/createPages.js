/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

const { resolve: r } = require("path");

const { nodeFields } = require("../src/config/internal/nodes");
const { ROUTE_BLOG, ROUTE_DOCS, ROUTE_LANDING, ROUTE_ROOT } = require("../src/config/routes/mappings");

const TemplateBlogPost = r(__dirname, "../src/components/templates/blog/BlogPost.jsx");
const TemplateDocsPage = r(__dirname, "../src/components/templates/docs/DocsPage.jsx");

const mdxQuery = `
{
  allMdx {
    edges {
      node {
        fields {
          ${Object.keys(nodeFields).map((nf) => nf.replace(",", "\n"))}
        }
        frontmatter {
          draft
        }
        id
      }
    }
  }
}
`;

const createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const isProductionMode = process.env.NODE_ENV === "production";

  /* Always redirect from the landing page to the root route. */
  createRedirect({
    fromPath: ROUTE_LANDING,
    redirectInBrowser: true,
    toPath: ROUTE_ROOT,
  });

  const mdxQueryResult = await graphql(mdxQuery);
  if (mdxQueryResult.errors) {
    throw Error("Error while running GraphQL query for MDX!", mdxQueryResult.errors);
  }

  mdxQueryResult.data.allMdx.edges.forEach(({ node }) => {
    const { id } = node;
    const { contentSourceType, date, relativeDirectory, slug, slugParentRoute } = node.fields;
    const { draft, publishTime } = node.frontmatter;

    /* Only create non-draft pages in production mode while also create draft pages during development. */
    if (draft && isProductionMode) return;

    let template;
    switch (slugParentRoute) {
      case ROUTE_BLOG:
        template = TemplateBlogPost;
        break;
      case ROUTE_DOCS:
        template = TemplateDocsPage;
        break;
      default:
        throw Error(`No matching template found while creating page for node with path ${slugParentRoute}${slug}!`);
    }

    createPage({
      path: `${slugParentRoute}${slug}`,
      component: template,
      /*
       * Make the specified fields available as variables in page queries.
       *
       * @see https://graphql.org/learn/queries/#variables
       * @see https://www.gatsbyjs.org/docs/graphql-reference/#query-variables
       */
      context: {
        contentSourceType,
        date,
        id,
        publishTime,
        relativeDirectory,
        slug,
        slugParentRoute,
      },
    });
  });
};

/**
 * Implementation of the Gatsby Node "createPages" API which tells plugins to add pages.
 * This extension point is called only after the initial sourcing and transformation of nodes and
 * when the creation of the GraphQL schema is complete to allow to query data in order to create pages.
 * @since 0.10.0
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPage
 * @see https://www.gatsbyjs.com/docs/how-to/routing/mdx
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-mdx
 */
module.exports = createPages;
