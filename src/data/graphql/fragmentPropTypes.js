/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import PropTypes from "prop-types";

/**
 * GraphQL fragment prop types for the Gatsby Image "fluid" object returned from the "ImageSharpFluid" query type.
 * @see https://github.com/gatsbyjs/gatsby/blob/e6d7dc3a/packages/gatsby-image/src/index.js#L444-L453
 */
const contentMdxImageFluidPropTypes = {
  fluid: PropTypes.shape({
    aspectRatio: PropTypes.number.isRequired,
    base64: PropTypes.string,
    originalImg: PropTypes.string,
    originalName: PropTypes.string,
    presentationHeight: PropTypes.number,
    presentationWidth: PropTypes.number,
    sizes: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    srcSetWebp: PropTypes.string,
    srcWebp: PropTypes.string,
    tracedSVG: PropTypes.string,
  }),
};

/**
 * GraphQL fragment prop types for a media file of a MDX content document.
 */
const contentMdxMediaFilePropTypes = {
  extension: PropTypes.string,
  name: PropTypes.string,
  publicURL: PropTypes.string,
  relativeDirectory: PropTypes.string,
  relativePath: PropTypes.string,
};

/**
 * GraphQL fragment prop types for the frontmatter of a MDX content document.
 */
const contentMdxDocumentFrontmatterPropTypes = {
  contentImages: PropTypes.arrayOf(
    PropTypes.shape({
      ...contentMdxImageFluidPropTypes,
    })
  ),
  draft: PropTypes.bool,
  title: PropTypes.string,
};

/**
 * GraphQL fragment prop types for the frontmatter of a blog post.
 */
const contentBlogPostFrontmatterPropTypes = {
  frontmatter: PropTypes.shape({
    coverTitleColor: PropTypes.string,
    introduction: PropTypes.string.isRequired,
    publishTime: PropTypes.string.isRequired,
    ...contentMdxDocumentFrontmatterPropTypes,
  }),
};

/**
 * GraphQL fragment prop types for the frontmatter of a docs page.
 */
const contentDocsPageFrontmatterPropTypes = {
  frontmatter: PropTypes.shape({
    subline: PropTypes.string,
    ...contentMdxDocumentFrontmatterPropTypes,
  }),
};

/**
 * GraphQL fragment prop types for the node fields for content.
 */
const contentNodeFieldsPropTypes = {
  contentSourceType: PropTypes.string,
  slug: PropTypes.string,
  slugParentRoute: PropTypes.string,
};

/**
 * GraphQL fragment prop types for the node fields of a blog post.
 */
const contentBlogPostFieldsPropTypes = {
  fields: PropTypes.shape({
    date: PropTypes.string,
    relativeDirectory: PropTypes.string,
    bannerImage: PropTypes.shape({
      ...contentMdxImageFluidPropTypes,
    }).isRequired,
    coverImage: PropTypes.shape({
      ...contentMdxImageFluidPropTypes,
    }).isRequired,
    heroImage: PropTypes.shape({
      ...contentMdxImageFluidPropTypes,
    }).isRequired,
    ...contentNodeFieldsPropTypes,
  }),
};

/**
 * GraphQL fragment prop types for the node fields of a blog post.
 */
const contentDocsPageFieldsPropTypes = {
  fields: PropTypes.shape({ ...contentNodeFieldsPropTypes }),
};

/**
 * Prop types of the GraphQL fragment for a blog post.
 */
const contentBlogPostPropTypes = {
  ...contentBlogPostFieldsPropTypes,
  ...contentBlogPostFrontmatterPropTypes,
};

/**
 * Prop types of the GraphQL fragment for a blog post.
 */
const contentDocsPagePropTypes = {
  ...contentDocsPageFieldsPropTypes,
  ...contentDocsPageFrontmatterPropTypes,
};

/**
 * @file Provides prop types for global GraphQL fragments.
 * @since 0.10.0
 */
export {
  contentBlogPostPropTypes,
  contentBlogPostFrontmatterPropTypes,
  contentDocsPagePropTypes,
  contentDocsPageFrontmatterPropTypes,
  contentMdxImageFluidPropTypes,
  contentMdxMediaFilePropTypes,
};
