/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * @file Provides global GraphQL fragments.
 * @since 0.10.0
 */

import { graphql } from "gatsby";

/**
 * GraphQL fragment for fluid MDX document images.
 * The value of the `maxWidth` query parameter is based on the maximum width of the content wrapper HTML element and the media breakpoints of the used
 * global theme for "4K" devices.
 */
export const gqlFragmentContentMdxDocumentImageFluid = graphql`
  fragment contentMdxDocumentImageFluid on ImageSharp {
    fluid(maxWidth: 2560, quality: 100) {
      originalImg
      originalName
      presentationHeight
      presentationWidth
      ...GatsbyImageSharpFluid
    }
  }
`;

/**
 * GraphQL fragment for blog post media files.
 */
export const gqlFragmentContentBlogPostMediaFile = graphql`
  fragment contentBlogPostMediaFile on File {
    extension
    name
    publicURL
    relativeDirectory
    relativePath
  }
`;

/**
 * GraphQL fragment for the frontmatter fields of an MDX blog post.
 */
export const gqlFragmentContentBlogPostFrontmatter = graphql`
  fragment contentBlogPostFrontmatter on Mdx {
    frontmatter {
      coverTitleColor
      draft
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
      draft
      subline
      title
    }
  }
`;

/**
 * GraphQL fragment for the node fields of an MDX blog post.
 */
export const gqlFragmentContentBlogPostFields = graphql`
  fragment contentBlogPostFields on Mdx {
    fields {
      bannerImage {
        childImageSharp {
          ...contentMdxDocumentImageFluid
        }
      }
      coverImage {
        childImageSharp {
          ...contentMdxDocumentImageFluid
        }
      }
      heroImage {
        childImageSharp {
          ...contentMdxDocumentImageFluid
        }
      }
      heroVideo {
        ...contentBlogPostMediaFile
      }
      heroVideoPoster {
        childImageSharp {
          ...contentMdxDocumentImageFluid
        }
      }
      contentSourceType
      date
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
