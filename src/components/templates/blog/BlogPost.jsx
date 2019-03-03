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
import camelCase from "camelcase";

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
const BlogPost = ({ data: { mdx, images }, location: { pathname }, ...passProps }) => {
  /*
   * Make each image available as image prop in camelcase format consisting of the name and extension of the file.
   * Example: "snow-mountain.png" -> "snowMountainPng"
   */
  const blogPostImages = {};
  images?.edges.forEach(({ node }) => {
    const { extension, name } = node;
    const imageName = camelCase(`${name}.${extension}`);
    blogPostImages[imageName] = node.childImageSharp;
  });

  /*
   * Shorten the object key path for content image props by deconstructing the "childImageSharp" property.
   * The images can then be used by their index: `props.contentImages[0].fluid`
   */
  const blogPostContentImages = [];
  if (mdx.frontmatter?.contentImages) {
    mdx.frontmatter.contentImages.forEach(({ childImageSharp }) => blogPostContentImages.push(childImageSharp));
  }

  return (
    <BaseLayout pathName={pathname}>
      <Section>
        <Content as="article" centered>
          <PageTypoHead fontScale={9} headline={mdx.frontmatter?.title} subline={mdx.frontmatter?.introduction} />
          <MDXProvider components={mappedHtmlElementComponents}>
            <MDXRenderer
              contentImages={blogPostContentImages}
              heroImage={mdx.frontmatter?.heroImage?.childImageSharp}
              images={blogPostImages}
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
      ...contentBlogPostFrontmatter
    }
  }
`;

export default BlogPost;
