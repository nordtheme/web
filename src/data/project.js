/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides metadata about the `nord` and `nord-docs` packages.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://github.com/arcticicestudio/nord
 * @since 0.1.0
 */

const { author, description, homepage, name, repository, title, version } = require("nord/package.json");

const {
  author: pkgAuthor,
  description: pkgDescription,
  homepage: pkgHomepage,
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
  name: pkgName,
  repository: pkgRepository,
  title: pkgTitle,
  version: pkgVersion
};

module.exports = { metadataNord, metadataNordDocs };
