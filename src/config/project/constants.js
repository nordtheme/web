/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides general project constants.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.5.0
 */

import { metadataNordDocs } from "data/project";
import { getSemVerFromGitDescribe } from "utils";

/**
 * The current copyright year.
 *
 * @constant {string}
 */
const COPYRIGHT_YEAR = new Date().getFullYear();

/**
 * The date format for the "date-fns" library according to ISO 8601.
 *
 * @constant {string}
 * @see https://date-fns.org/v1.29.0/docs/format
 * @see https://en.wikipedia.org/wiki/ISO_8601
 */
const DATE_FORMAT = "yyyy-MM-ddTHH:mm:ssxx";

/**
 * The name of the current Git branch extracted from the local Git repository.
 *
 * @constant {string}
 */
const GIT_BRANCH = process.env.NORD_DOCS_GIT_BRANCH || "";

/**
 * The full SHA hash of the latest Git commit extracted from the local Git repository.
 *
 * @constant {string}
 */
const GIT_COMMITHASH = process.env.NORD_DOCS_GIT_COMMITHASH || "";

/**
 * The count of additional commits on top of the latest tag extracted from the local Git repository.
 *
 * @constant {string}
 */
const GIT_COMMITS_AHEAD = getSemVerFromGitDescribe(process.env.NORD_DOCS_GIT_VERSION)?.commitsAhead;

/**
 * The version (SemVer) extracted from the local Git repository. Defaults to the version of the package metadata if the
 * "NORD_DOCS_GIT_VERSION" environment variable is not set or empty.
 *
 * @constant {string}
 */
const VERSION = getSemVerFromGitDescribe(process.env.NORD_DOCS_GIT_VERSION)?.raw || metadataNordDocs.version;

/**
 * The version (SemVer) channel extracted from the {@link VERSION}.
 *
 * @constant {string}
 */
const VERSION_CHANNEL = getSemVerFromGitDescribe(process.env.NORD_DOCS_GIT_VERSION)?.channel;

/**
 * The version (SemVer) channel extracted from the {@link VERSION}.
 *
 * @constant {string}
 */
const VERSION_STABILITY_STATUS = getSemVerFromGitDescribe(process.env.NORD_DOCS_GIT_VERSION)?.stabilityStatus;

export {
  COPYRIGHT_YEAR,
  DATE_FORMAT,
  GIT_BRANCH,
  GIT_COMMITHASH,
  GIT_COMMITS_AHEAD,
  VERSION,
  VERSION_CHANNEL,
  VERSION_STABILITY_STATUS
};
