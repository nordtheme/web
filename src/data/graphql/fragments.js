/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides global GraphQL fragments.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 */

import { graphql } from "gatsby";

/**
 * GraphQL fragment for fluid MDX document images.
 * The value of the `maxWidth` query parameter is based on the maximum witdh of the content wrapper HTML element and
 * the media breakpoints of the used global theme for "4K" devices.
 */
export const gqlFragmentContentMdxDocumentImageFluid = graphql`
  fragment contentMdxDocumentImageFluid on ImageSharp {
    fluid(maxWidth: 2560, quality: 90) {
      originalImg
      originalName
      presentationHeight
      presentationWidth
      ...GatsbyImageSharpFluid
    }
  }
`;

/**
 * GraphQL fragment for the frontmatter fields of an MDX blog post.
 */
export const gqlFragmentContentBlogPostFrontmatter = graphql`
  fragment contentBlogPostFrontmatter on Mdx {
    frontmatter {
      contentImages {
        childImageSharp {
          ...contentMdxDocumentImageFluid
        }
      }
      draft
      heroImage {
        childImageSharp {
          ...contentMdxDocumentImageFluid
        }
      }
      introduction
      publishTime
      title
    }
  }
`;

/**
 * GraphQL fragment for the frontmatter fields of an MDX docs page.
 */
export const gqlFragmentContentDocsPageFrontmatter = graphql`
  fragment contentDocsPageFrontmatter on Mdx {
    frontmatter {
      contentImages {
        childImageSharp {
          ...contentMdxDocumentImageFluid
        }
      }
      draft
      subline
      title
    }
  }
`;

/**
 * GraphQL fragment for the node fields of an MDX blog post.
 * Gatsby internally relies on Moment.js for the provided `formatString` function.
 * The allowed tokens can be found in the official Moment.js documentation.
 *
 * @see https://momentjs.com/docs/#/displaying/format
 * @see https://www.gatsbyjs.org/docs/graphql-reference/#format
 */
export const gqlFragmentContentBlogPostFields = graphql`
  fragment contentBlogPostFields on Mdx {
    fields {
      contentSourceType
      date(formatString: "YYYY-MM-DDTHH:MM:ssZZ")
      relativeDirectory
      slug
      slugParentRoute
    }
  }
`;

/**
 * GraphQL fragment for the node fields of an MDX docs page.
 */
export const gqlFragmentContentDocsPagesFields = graphql`
  fragment contentDocsPageFields on Mdx {
    fields {
      contentSourceType
      relativeDirectory
      slug
      slugParentRoute
    }
  }
`;

/**
 * GraphQL fragment for MDX blog posts.
 * Includes the node `fields` and the frontmatter fields defined in each MDX blog post file.
 */
export const gqlFragmentContentBlogPost = graphql`
  fragment contentBlogPost on Mdx {
    ...contentBlogPostFields
    ...contentBlogPostFrontmatter
  }
`;

/**
 * GraphQL fragment for MDX docs page.
 * Includes the node `fields` and the frontmatter fields defined in each MDX docs page file.
 */
export const gqlFragmentContentDocsPage = graphql`
  fragment contentDocsPage on Mdx {
    ...contentDocsPageFields
    ...contentDocsPageFrontmatter
  }
`;
