/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, StaticQuery } from "gatsby";

import metadataBanner from "assets/images/metadata-banner.png";

import JsonLd from "./JsonLd";

const PureSiteMetadata = ({
  data: {
    site: {
      siteMetadata: {
        keywords: keywordsNordDocs,
        nord: {
          author,
          description,
          keywords: keywordsNord,
          links: {
            organization: {
              social: { twitter }
            }
          },
          title
        },
        siteUrl
      }
    }
  },
  pathName
}) => (
  <Fragment>
    <Helmet defaultTitle={title} titleTemplate={`${title} | %s`}>
      <html lang="en" prefix="og: http://ogp.me/ns#" />
      <meta content={description} name="description" />
      <meta content={author.name} name="author" />
      <meta content={Array.from(new Set([...keywordsNord, ...keywordsNordDocs]))} name="keywords" />
      <meta content={author.name} name="creator" />
      <meta content={author.name} name="publisher" />

      <meta content={`${siteUrl}${pathName}`} property="og:url" />
      <meta content="website" property="og:type" />
      <meta content="en" property="og:locale" />
      <meta content={title} property="og:title" />
      <meta content={title} property="og:site_name" />
      <meta content={`${siteUrl}${metadataBanner}`} property="og:image" />
      <meta content="image/png" property="og:image:type" />
      <meta content="1200" property="og:image:width" />
      <meta content="630" property="og:image:height" />
      <meta content={description} property="og:description" />

      <meta content="summary_large_image" name="twitter:card" />
      <meta content={`@${twitter.id}`} name="twitter:site" />
      <meta content={title} name="twitter:title" />
      <meta content={description} name="twitter:description" />
      <meta content={`${siteUrl}${metadataBanner}`} name="twitter:image" />
      <meta content="A banner consisting of Nord's logo and a caption" name="twitter:image:alt" />
      <meta content={`@${twitter.id}`} name="twitter:creator" />
    </Helmet>
    <JsonLd
      author={author}
      canonicalUrl={siteUrl}
      defaultTitle={title}
      description={description}
      imageUrl={`${siteUrl}${metadataBanner}`}
      keywords={Array.from(new Set([...keywordsNord, ...keywordsNordDocs]))}
      title={title}
      url={`${siteUrl}${pathName}`}
    />
  </Fragment>
);

/**
 * Provides metadata tags that'll be injected into the `<head>` for SEO & social media purposes including
 * "Twitter Card", "Open Graph Protocol" and "JSON-LD" specification elements.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.4.0
 * @see https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image
 * @see https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup
 * @see https://developers.facebook.com/docs/sharing/opengraph/object-properties
 * @see http://ogp.me
 * @see https://developers.facebook.com/docs/sharing/best-practices
 * @see https://json-ld.org
 * @see https://schema.org
 * @see https://rdfa.info
 * @see https://en.wikipedia.org/wiki/RDFa
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
 */
const SiteMetadata = ({ pathName, ...passProp }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            keywords
            nord {
              author {
                name
                url
              }
              description
              keywords
              links {
                organization {
                  social {
                    twitter {
                      id
                    }
                  }
                }
              }
              title
            }
            siteUrl
          }
        }
      }
    `}
    /* eslint-disable-next-line react/jsx-no-bind */
    render={data => <PureSiteMetadata data={data} pathName={pathName} {...passProp} />}
  />
);

PureSiteMetadata.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        keywords: PropTypes.arrayOf(PropTypes.string),
        nord: PropTypes.shape({
          author: PropTypes.shape({
            name: PropTypes.string,
            url: PropTypes.string
          }),
          description: PropTypes.string,
          keywords: PropTypes.arrayOf(PropTypes.string),
          links: PropTypes.shape({
            social: PropTypes.shape({
              twitter: PropTypes.shape({
                id: PropTypes.string
              })
            })
          }),
          title: PropTypes.string
        }),
        siteUrl: PropTypes.string
      })
    })
  }).isRequired,
  pathName: PropTypes.string.isRequired
};

SiteMetadata.propTypes = { pathName: PropTypes.string.isRequired };

export { PureSiteMetadata };
export default SiteMetadata;
