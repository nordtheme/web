/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";

import BaseLayout from "layouts/core/BaseLayout";
import Section, { Content } from "containers/core/Section";

import PageTypoHead from "../shared/PageTypoHead";
import mappedHtmlElementComponents from "../shared/mappedHtmlElementComponents";
import { blogPostTemplatePropTypes } from "../shared/propTypes";

/**
 * A template for blog posts with custom HTML components and injected props that can be used in the MDX document.
 * @since 0.10.0
 * @see https://mdxjs.com
 * @see https://www.gatsbyjs.com/docs/how-to/routing/mdx
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-mdx
 *
 */
const BlogPost = ({ data: { images, mdx, videos }, location: { pathname }, ...passProps }) => {
  /*
   * Generate mappings for content images and videos to allow to use them by their file names.
   * Examples:
   *   - `prop.images["snow-mountain.png"]`
   *   - `prop.videos["arctic-owl.mp4"]`
   */
  const blogPostImages = {};
  images?.edges?.forEach(({ node: { childImageSharp } }) => {
    blogPostImages[childImageSharp.fluid.originalName] = childImageSharp.fluid;
  });
  const blogPostVideos = {};
  videos?.edges?.forEach(({ node }) => {
    blogPostVideos[`${node.name}.${node.extension}`] = node.publicURL;
  });

  return (
    <BaseLayout pathName={pathname}>
      <Section>
        <Content as="article" centered>
          <PageTypoHead fontScale={9} headline={mdx.frontmatter?.title} subline={mdx.frontmatter?.introduction} />
          <MDXProvider components={mappedHtmlElementComponents}>
            <MDXRenderer
              bannerImage={mdx.fields?.bannerImage?.childImageSharp.fluid}
              coverImage={mdx.fields?.coverImage?.childImageSharp.fluid}
              heroImage={mdx.fields?.heroImage?.childImageSharp.fluid}
              heroVideo={mdx.fields?.heroVideo}
              heroVideoPoster={mdx.fields?.heroVideoPoster?.childImageSharp.fluid}
              images={blogPostImages}
              videos={blogPostVideos}
              {...passProps}
            >
              {mdx.body}
            </MDXRenderer>
          </MDXProvider>
        </Content>
      </Section>
    </BaseLayout>
  );
};

BlogPost.propTypes = blogPostTemplatePropTypes;

export const pageQuery = graphql`
  query ($id: String!, $relativeDirectory: String!) {
    images: allFile(filter: { relativeDirectory: { eq: $relativeDirectory }, extension: { regex: "/(png|jpe?g)/" } }, sort: { fields: [name], order: ASC }) {
      edges {
        node {
          childImageSharp {
            ...contentMdxDocumentImageFluid
          }
          extension
          name
        }
      }
    }
    mdx(id: { eq: $id }) {
      body
      id
      ...contentBlogPost
    }
    videos: allFile(filter: { relativeDirectory: { eq: $relativeDirectory }, extension: { regex: "/(mp4|webm)/" } }, sort: { fields: [name], order: ASC }) {
      edges {
        node {
          ...contentBlogPostMediaFile
        }
      }
    }
  }
`;

export default BlogPost;
