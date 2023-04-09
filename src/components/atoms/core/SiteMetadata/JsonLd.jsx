/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

/**
 * Provides the linked data schema using the JSON-LD specification.
 * @since 0.4.0
 * @see https://json-ld.org
 * @see https://schema.org
 */
const JsonLd = ({ author, canonicalUrl, defaultTitle, description, imageUrl, keywords, title, url }) => {
  const baseSchema = [
    {
      "@context": "http://schema.org",
      "@type": "Website",
      url,
      canonicalUrl,
      name: title,
      alternateName: defaultTitle,
      description,
      author: {
        "@type": "Person",
        name: author.name,
        url: author.url,
      },
      publisher: {
        "@type": "Organization",
        name: author.name,
        url: author.url,
        logo: imageUrl,
      },
      creator: {
        "@type": "Person",
        name: author.name,
        url: author.url,
      },
      image: {
        "@type": "ImageObject",
        url: imageUrl,
      },
      keywords,
    },
  ];

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
    </Helmet>
  );
};

JsonLd.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  canonicalUrl: PropTypes.string.isRequired,
  defaultTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default React.memo(JsonLd);
