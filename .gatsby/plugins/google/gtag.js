/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file The configuration for the Gatsby plugin `gatsby-plugin-google-gtag`.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-gtag
 * @since 0.4.0
 */

module.exports = {
  /* The tracking IDs for all used "Google Marketing" products. */
  trackingIds: [`${process.env.NORD_DOCS_GOOGLE_UNIVERSAL_ANALYTICS_TRACKING_ID}`],
  /* The configuration that gets passed to the `gtag.js`'s `config` command. */
  /* eslint-disable-next-line babel/camelcase */
  gtagConfig: { anonymize_ip: true },
  pluginConfig: {
    /*
     * Put the `gtag.js` tracking script in the HTML `<head>` instead of the `<body>` as recommended by Google.
     *
     * @see https://developers.google.com/analytics/devguides/collection/gtagjs
     */
    head: true,
    /*
     * Respect the 'Do Not Track' HTTP header.
     *
     * @see https://en.wikipedia.org/wiki/Do_Not_Track
     */
    respectDNT: true
  }
};
