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

import { WaveFooter } from "atoms/core/vectors/divider";
import BaseLayout from "layouts/core/BaseLayout";
import Section, { Content } from "containers/core/Section";

import mappedHtmlElementComponents from "../shared/mappedHtmlElementComponents";
import { docsPageTemplatePropTypes } from "../shared/propTypes";
import PaperSheet from "./styled/PaperSheet";
import PageTypoHead from "../shared/PageTypoHead";

/**
 * A template for docs pages with custom HTML components and injected props that can be used in the MDX document.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 * @see https://mdxjs.com
 * @see https://github.com/ChristopherBiscardi/gatsby-mdx
 *
 */
const DocsPage = ({ data: { mdx, images }, location: { pathname }, ...passProps }) => {
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

  /* Shorten the object key path for content image props by deconstructing the "childImageSharp" property. */
  const blogPostContentImages = [];
  if (mdx.frontmatter?.contentImages) {
    mdx.frontmatter.contentImages.forEach(({ childImageSharp }) => blogPostContentImages.push(childImageSharp));
  }

  return (
    <BaseLayout headerVariant="tertiary" pathName={pathname}>
      <Section variant="tertiary">
        <Content as="article" centered>
          <MDXProvider components={mappedHtmlElementComponents}>
            <PageTypoHead fontScale={6.5} headline={mdx.frontmatter?.title} subline={mdx.frontmatter?.subline} />
            <PaperSheet>
              <MDXRenderer contentImages={blogPostContentImages} images={blogPostImages} {...passProps}>
                {mdx.code.body}
              </MDXRenderer>
            </PaperSheet>
          </MDXProvider>
        </Content>
        <WaveFooter />
      </Section>
    </BaseLayout>
  );
};

DocsPage.propTypes = docsPageTemplatePropTypes;

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
      ...contentDocsPageFrontmatter
    }
  }
`;

export default DocsPage;
