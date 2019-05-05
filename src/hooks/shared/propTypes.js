/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides shared prop types for Hooks.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.12.0
 */

import PropTypes from "prop-types";

import { contentMdxImageFluidPropTypes, contentMdxMediaFilePropTypes } from "data/graphql/fragmentPropTypes";

const imagePropTypes = {
  childImageSharp: PropTypes.shape({
    ...contentMdxImageFluidPropTypes
  }),
  extension: PropTypes.string,
  name: PropTypes.string,
  relativeDirectory: PropTypes.string
};

const dataImagesPropTypes = {
  images: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({ ...imagePropTypes }))
  })
};

const dataVideoPostersPropTypes = {
  images: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({ ...imagePropTypes }))
  })
};

const dataVideosPropTypes = {
  videos: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        ...contentMdxMediaFilePropTypes
      })
    )
  })
};

const usePortsAssetsPropTypes = {
  data: PropTypes.shape({
    ...dataImagesPropTypes,
    ...dataVideoPostersPropTypes,
    ...dataVideosPropTypes
  }).isRequired
};

/* eslint-disable-next-line import/prefer-default-export */
export { usePortsAssetsPropTypes };
