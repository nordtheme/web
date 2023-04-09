/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

const { author, description, homepage, keywords, name, repository, version } = require("nord/package.json");

const {
  author: pkgAuthor,
  description: pkgDescription,
  homepage: pkgHomepage,
  keywords: pkgKeywords,
  name: pkgName,
  repository: pkgRepository,
  version: pkgVersion,
} = require("../../package.json");

const title = "Nord Docs";

/**
 * Provides social and community links.
 * @type {Object}
 * @since 0.4.0
 */
const links = {
  community: {
    keybase: {
      url: "https://github.com/nordtheme/.github/blob/main/support.md#updates-communities--content",
    },
    reddit: {
      id: "nordtheme",
      url: "https://www.reddit.com/r/nordtheme",
    },
    slack: {
      url: "https://github.com/nordtheme/.github/blob/main/support.md#updates-communities--content",
    },
    spectrum: {
      url: "https://github.com/nordtheme/.github/blob/main/support.md#updates-communities--content",
    },
  },
  organization: {
    url: "https://www.svengreb.de",
    social: {
      github: {
        id: "svengreb",
        url: "https://github.com/svengreb",
      },
      keybase: {
        id: "svengreb",
        url: "https://keybase.io/svengreb",
      },
      reddit: {
        id: "svengreb",
        url: "https://www.reddit.com/user/svengreb",
      },
      slack: {
        url: "https://github.com/nordtheme/.github/blob/main/support.md#updates-communities--content",
      },
      spectrum: {
        url: "https://github.com/nordtheme/.github/blob/main/support.md#updates-communities--content",
      },
      stackoverflow: {
        id: "11586009",
        url: "https://stackoverflow.com/users/11586009/sven-greb",
      },
      twitter: {
        id: "svengreb",
        url: "https://twitter.com/svengreb",
      },
    },
  },
};

/**
 * Provides metadata about this `@nordtheme/web` project package.
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
  version,
};

/**
 * Provides metadata about the `@nordtheme/web` package.
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
  title,
  version: pkgVersion,
};

/**
 * Provides project tag names.
 * @type {Array<string>}
 * @since 0.7.0
 */
const tags = ["nord", "nordtheme"];

/**
 * Provides project metadata about Nord, the team and communities.
 * @since 0.1.0
 * @see https://github.com/nordtheme/nord
 */
module.exports = { links, metadataNord, metadataNordDocs, tags };
