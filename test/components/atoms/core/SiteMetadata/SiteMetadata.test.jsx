/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import { Helmet } from "react-helmet";

import { renderWithTheme } from "nord-docs-test-utils";
import { PureSiteMetadata as SiteMetadata } from "atoms/core/SiteMetadata";
import { metadataNord, metadataNordDocs } from "data/project";

const staticQueryResultDataMock = {
  site: {
    siteMetadata: {
      keywords: metadataNordDocs.keywords,
      nord: {
        author: {
          name: metadataNord.author.name,
          url: metadataNord.author.url
        },
        description: metadataNord.description,
        keywords: metadataNord.keywords,
        links: {
          organization: {
            social: {
              twitter: metadataNord.links.organization.social.twitter
            }
          }
        },
        title: metadataNord.title
      },
      siteUrl: metadataNord.homepage
    }
  }
};

describe("data consistency", () => {
  test("contains required Open Graph Protocol meta tags", () => {
    renderWithTheme(<SiteMetadata data={staticQueryResultDataMock} pathName="/" />);
    const generatedHelmetData = Helmet.peek();

    expect(generatedHelmetData.metaTags).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          property: "og:title",
          content: expect.stringContaining(metadataNord.title)
        }),
        expect.objectContaining({
          property: "og:type",
          content: expect.any(String)
        }),
        expect.objectContaining({
          property: "og:image",
          content: expect.stringContaining(metadataNord.homepage) || expect.any(String)
        }),
        expect.objectContaining({
          property: "og:url",
          content: expect.stringContaining(metadataNord.homepage)
        })
      ])
    );
  });

  test("contains additional Open Graph Protocol meta tags", () => {
    renderWithTheme(<SiteMetadata data={staticQueryResultDataMock} pathName="/" />);
    const generatedHelmetData = Helmet.peek();

    expect(generatedHelmetData.metaTags).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          property: "og:locale",
          content: expect.any(String)
        }),
        expect.objectContaining({
          property: "og:site_name",
          content: expect.stringContaining(metadataNord.title)
        }),
        expect.objectContaining({
          property: "og:image:type",
          content: expect.stringContaining("image/")
        })
      ])
    );
  });

  test("contains required Twitter Card meta tags", () => {
    renderWithTheme(<SiteMetadata data={staticQueryResultDataMock} pathName="/" />);
    const generatedHelmetData = Helmet.peek();

    expect(generatedHelmetData.metaTags).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "twitter:card",
          content: expect.stringContaining("summary_large_image") || expect.stringContaining("summary")
        }),
        expect.objectContaining({
          name: "twitter:site",
          content: expect.stringContaining(metadataNord.links.organization.social.twitter.id)
        }),
        expect.objectContaining({
          name: "twitter:description",
          content: expect.any(String)
        }),
        expect.objectContaining({
          name: "twitter:image",
          content: expect.stringContaining(metadataNord.homepage)
        })
      ])
    );
  });

  test("contains additional Twitter Card meta tags", () => {
    renderWithTheme(<SiteMetadata data={staticQueryResultDataMock} pathName="/" />);
    const generatedHelmetData = Helmet.peek();

    expect(generatedHelmetData.metaTags).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "twitter:image:alt",
          content: expect.any(String)
        }),
        expect.objectContaining({
          name: "twitter:creator",
          content: expect.any(String)
        })
      ])
    );
  });

  test("contains Open Graph Protocol HTML schema `prefix` attribute", () => {
    renderWithTheme(<SiteMetadata data={staticQueryResultDataMock} pathName="/" />);
    const generatedHelmetData = Helmet.peek();

    expect(generatedHelmetData.htmlAttributes).toEqual(
      expect.objectContaining({
        prefix: expect.stringContaining("ogp.me")
      })
    );
  });

  test("contains JSON-LD schema linked data `script` tag", () => {
    renderWithTheme(<SiteMetadata data={staticQueryResultDataMock} pathName="/" />);
    const generatedHelmetData = Helmet.peek();

    expect(generatedHelmetData.scriptTags).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          type: expect.stringContaining("ld+json"),
          innerHTML: expect.any(String)
        })
      ])
    );
  });
});
