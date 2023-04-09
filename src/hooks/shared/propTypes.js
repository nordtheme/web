/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import PropTypes from "prop-types";

import { contentMdxImageFluidPropTypes, contentMdxMediaFilePropTypes } from "data/graphql/fragmentPropTypes";

const imagePropTypes = {
  childImageSharp: PropTypes.shape({
    ...contentMdxImageFluidPropTypes,
  }),
  extension: PropTypes.string,
  name: PropTypes.string,
  relativeDirectory: PropTypes.string,
};

const dataImagesPropTypes = {
  images: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({ ...imagePropTypes })),
  }),
};

const dataVideoPostersPropTypes = {
  images: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({ ...imagePropTypes })),
  }),
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

const usePortsAssetsPropTypes = {
  data: PropTypes.shape({
    ...dataImagesPropTypes,
    ...dataVideoPostersPropTypes,
    ...dataVideosPropTypes,
  }).isRequired,
};

/**
 * @file Provides shared prop types for Hooks.
 * @since 0.12.0
 */
/* eslint-disable-next-line import/prefer-default-export */
export { usePortsAssetsPropTypes };
