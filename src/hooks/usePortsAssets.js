/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { graphql, useStaticQuery } from "gatsby";

const gqlQueryPortsAssetsByDirectoryPrefix = graphql`
  {
    images: allFile(
      filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { regex: "/ports/" }, extension: { regex: "/(png|jpe?g)/" } }
      sort: { fields: [name], order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            ...contentMdxDocumentImageFluid
          }
          extension
          name
          relativeDirectory
        }
      }
    }
    videos: allFile(
      filter: { sourceInstanceName: { eq: "videos" }, relativeDirectory: { regex: "/ports/" }, extension: { regex: "/(mp4|webm)/" } }
      sort: { fields: [name], order: ASC }
    ) {
      edges {
        node {
          ...contentBlogPostMediaFile
        }
      }
    }
    videoPosters: allFile(
      filter: { sourceInstanceName: { eq: "videos" }, relativeDirectory: { regex: "/ports/" }, extension: { regex: "/(png|jpe?g)/" } }
      sort: { fields: [name], order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            ...contentMdxDocumentImageFluid
          }
          extension
          name
          relativeDirectory
        }
      }
    }
  }
`;

/**
 * A hook to query assets for the given port project.
 * @method usePortsAssets
 * @param {string} portName The name of the port to query for assets.
 * @return {Object} The found assets.
 * @since 0.12.0
 */
export default function usePortsAssets(portName) {
  const queryResult = useStaticQuery(gqlQueryPortsAssetsByDirectoryPrefix);

  /*
   * Filter assets for the specified port project name and generate mappings for content images and videos to allow to use them by their file names.
   * Examples:
   *   - `images["snow-mountain.png"]`
   *   - `videos["arctic-owl.mp4"]`
   */
  const images = {};
  queryResult.images?.edges?.forEach(({ node }) => {
    if (node.relativeDirectory.match(/([^/]*)\/*$/)[1] === portName) {
      images[node.childImageSharp.fluid.originalName] = node.childImageSharp.fluid;
    }
  });

  const videos = {};
  queryResult.videos?.edges?.forEach(({ node }) => {
    if (node.relativeDirectory.match(/([^/]*)\/*$/)[1] === portName) {
      videos[`${node.name}.${node.extension}`] = node;
    }
  });

  const videoPosters = {};
  queryResult.videoPosters?.edges?.forEach(({ node }) => {
    if (node.relativeDirectory.match(/([^/]*)\/*$/)[1] === portName) {
      videoPosters[node.childImageSharp.fluid.originalName] = node.childImageSharp.fluid;
    }
  });

  return { images, videos, videoPosters };
}
