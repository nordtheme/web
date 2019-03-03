/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides shared prop types.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 */

import PropTypes from "prop-types";

import {
  contentBlogPostFrontmatterPropTypes,
  contentDocsPageFrontmatterPropTypes,
  contentMdxImageFluidPropTypes
} from "data/graphql/fragmentPropTypes";

const dataImagesPropTypes = {
  images: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        childImageSharp: PropTypes.shape({
          ...contentMdxImageFluidPropTypes
        }),
        extension: PropTypes.string,
        name: PropTypes.string
      })
    )
  })
};

const dataMDXPropTypes = {
  code: PropTypes.shape({
    body: PropTypes.string
  }),
  id: PropTypes.string
};

const blogPostTemplatePropTypes = {
  data: PropTypes.shape({
    ...dataImagesPropTypes,
    mdx: PropTypes.shape({
      ...dataMDXPropTypes,
      ...contentBlogPostFrontmatterPropTypes
    })
  }).isRequired
};

const docsPageTemplatePropTypes = {
  data: PropTypes.shape({
    ...dataImagesPropTypes,
    mdx: PropTypes.shape({
      ...dataMDXPropTypes,
      ...contentDocsPageFrontmatterPropTypes
    })
  }).isRequired
};

export { blogPostTemplatePropTypes, docsPageTemplatePropTypes };
