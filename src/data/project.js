/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides project metadata about Nord, the team and communities.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://github.com/arcticicestudio/nord
 * @since 0.1.0
 */

const { author, description, homepage, keywords, name, repository, title, version } = require("nord/package.json");

/**
 * Provides social and community links.
 *
 * @type {Object}
 * @since 0.4.0
 */
const links = {
  community: {
    keybase: {
      id: "nord.chat",
      url: "https://keybase.io/team/nord.chat"
    },
    slack: {
      id: "arcticicestudio",
      url: "https://arcticicestudio.slack.com"
    },
    spectrum: {
      id: "arcticicestudio",
      url: "https://spectrum.chat/arcticicestudio"
    }
  },
  organization: {
    url: "https://arcticicestudio.com",
    social: {
      github: {
        id: "arcticicestudio",
        url: "https://github.com/arcticicestudio"
      },
      keybase: {
        id: "arcticicestudio",
        url: "https://keybase.io/arcticicestudio"
      },
      reddit: {
        id: "arcticicestudio",
        url: "https://www.reddit.com/user/arcticicestudio"
      },
      slack: {
        id: "arcticicestudio",
        url: "https://arcticicestudio.slack.com"
      },
      spectrum: {
        id: "arcticicestudio",
        url: "https://spectrum.chat/users/arcticicestudio"
      },
      stackoverflow: {
        id: "4568698",
        url: "https://stackoverflow.com/users/4568698/arctic-ice-studio"
      },
      twitter: {
        id: "arcticicestudio",
        url: "https://twitter.com/arcticicestudio"
      }
    }
  }
};

const {
  author: pkgAuthor,
  description: pkgDescription,
  homepage: pkgHomepage,
  keywords: pkgKeywords,
  name: pkgName,
  repository: pkgRepository,
  title: pkgTitle,
  version: pkgVersion
} = require("../../package.json");

/**
 * Provides metadata about this `nord-docs` project package.
 *
 * @type {Object}
 * @since 0.1.0
 */
const metadataNord = {
  author,
  description,
  homepage: pkgHomepage || homepage,
  links,
  keywords,
  name,
  repository,
  title,
  version
};

/**
 * Provides metadata about the `nord-docs` package.
 *
 * @type {Object}
 * @since 0.1.0
 */
const metadataNordDocs = {
  author: pkgAuthor,
  description: pkgDescription,
  homepage: pkgHomepage || homepage,
  keywords: pkgKeywords,
  name: pkgName,
  repository: pkgRepository,
  title: pkgTitle,
  version: pkgVersion
};

module.exports = { links, metadataNord, metadataNordDocs };
