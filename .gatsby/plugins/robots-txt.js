/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file The configuration for the Gatsby plugin `gatsby-plugin-robots-txt`.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://github.com/mdreizin/gatsby-plugin-robots-txt
 * @since 0.4.0
 */

module.exports = {
  policy: [{ userAgent: "*", allow: "/" }]
};
