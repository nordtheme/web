/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import PropTypes from "prop-types";

import {
  contentBlogPostFrontmatterPropTypes,
  contentDocsPageFrontmatterPropTypes,
  contentMdxImageFluidPropTypes,
  contentMdxMediaFilePropTypes,
} from "data/graphql/fragmentPropTypes";

const imagePropTypes = {
  childImageSharp: PropTypes.shape({
    ...contentMdxImageFluidPropTypes,
  }),
  extension: PropTypes.string,
  name: PropTypes.string,
};

const dataImagesPropTypes = {
  images: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({ ...imagePropTypes })),
  }),
};

const dataMDXPropTypes = {
  code: PropTypes.shape({
    body: PropTypes.string,
  }),
  id: PropTypes.string,
};

const dataVideosPropTypes = {
  videos: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        ...contentMdxMediaFilePropTypes,
      })
    ),
  }),
};

const blogPostTemplatePropTypes = {
  data: PropTypes.shape({
    ...dataImagesPropTypes,
    ...dataVideosPropTypes,
    mdx: PropTypes.shape({
      ...dataMDXPropTypes,
      ...contentBlogPostFrontmatterPropTypes,
    }),
  }).isRequired,
};

const docsPageTemplatePropTypes = {
  data: PropTypes.shape({
    ...dataImagesPropTypes,
    mdx: PropTypes.shape({
      ...dataMDXPropTypes,
      ...contentDocsPageFrontmatterPropTypes,
    }),
  }).isRequired,
};

/**
 * @file Provides shared prop types.
 * @since 0.10.0
 */
export { blogPostTemplatePropTypes, docsPageTemplatePropTypes };
