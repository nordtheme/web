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
import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";

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
const DocsPage = ({ data: { images, mdx, videos }, location: { pathname }, ...passProps }) => {
  /*
   * Generate mappings for content images and videos to allow to use them by their file names.
   * Examples:
   *
   * - `prop.images["snow-mountain.png"]`
   * - `prop.videos["arctic-owl.mp4"]`
   */
  const docsPageImages = {};
  images?.edges?.forEach(({ node: { childImageSharp } }) => {
    docsPageImages[childImageSharp.fluid.originalName] = childImageSharp.fluid;
  });
  const docsPageVideos = {};
  videos?.edges?.forEach(({ node }) => {
    docsPageVideos[`${node.name}.${node.extension}`] = node.publicURL;
  });

  return (
    <BaseLayout headerVariant="tertiary" pathName={pathname}>
      <Section variant="tertiary">
        <Content as="article" centered>
          <MDXProvider components={mappedHtmlElementComponents}>
            <PageTypoHead fontScale={6.5} headline={mdx.frontmatter?.title} subline={mdx.frontmatter?.subline} />
            <PaperSheet>
              <MDXRenderer images={docsPageImages} videos={docsPageVideos} {...passProps}>
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

export default DocsPage;
