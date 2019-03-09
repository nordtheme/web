/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/tag";
import { graphql } from "gatsby";

import BaseLayout from "layouts/core/BaseLayout";
import Section, { Content } from "containers/core/Section";

import PageTypoHead from "../shared/PageTypoHead";
import mappedHtmlElementComponents from "../shared/mappedHtmlElementComponents";
import { blogPostTemplatePropTypes } from "../shared/propTypes";

/**
 * A template for blog posts with custom HTML components and injected props that can be used in the MDX document.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 * @see https://mdxjs.com
 * @see https://github.com/ChristopherBiscardi/gatsby-mdx
 *
 */
const BlogPost = ({ data: { images, mdx, videos }, location: { pathname }, ...passProps }) => {
  /*
   * Generate mappings for content images and videos to allow to use them by their file names.
   * Examples:
   *
   * - `prop.images["snow-mountain.png"]`
   * - `prop.videos["arctic-owl.mp4"]`
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
              {mdx.code.body}
            </MDXRenderer>
          </MDXProvider>
        </Content>
      </Section>
    </BaseLayout>
  );
};

BlogPost.propTypes = blogPostTemplatePropTypes;

export const pageQuery = graphql`
  query($id: String!, $relativeDirectory: String!) {
    images: allFile(
      filter: { relativeDirectory: { eq: $relativeDirectory }, extension: { regex: "/(png|jpe?g)/" } }
      sort: { fields: [name], order: ASC }
    ) {
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
      code {
        body
      }
      id
      ...contentBlogPost
    }
    videos: allFile(
      filter: { relativeDirectory: { eq: $relativeDirectory }, extension: { regex: "/(mp4|webm)/" } }
      sort: { fields: [name], order: ASC }
    ) {
      edges {
        node {
          ...contentBlogPostMediaFile
        }
      }
    }
  }
`;

export default BlogPost;
