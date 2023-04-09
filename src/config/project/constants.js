/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { metadataNordDocs } from "data/project";
import { getSemVerFromGitDescribe } from "utils";

/**
 * The current copyright year.
 * @constant {string}
 */
const COPYRIGHT_YEAR = new Date().getFullYear();

/**
 * The date format for the [date-fns](https://date-fns.org) library according to ISO 8601.
 * @constant {string}
 * @see https://date-fns.org/v1.29.0/docs/format
 * @see https://en.wikipedia.org/wiki/ISO_8601
 */
const DATE_FORMAT = "yyyy-MM-dd'T'HH:mm:ssxx";

/**
 * The name of the current Git branch extracted from the local Git repository.
 * @constant {string}
 */
const GIT_BRANCH = process.env.NORD_DOCS_GIT_BRANCH || "";

/**
 * The full SHA hash of the latest Git commit extracted from the local Git repository.
 * @constant {string}
 */
const GIT_COMMITHASH = process.env.NORD_DOCS_GIT_COMMITHASH || "";

/**
 * The count of additional commits on top of the latest tag extracted from the local Git repository.
 * @constant {string}
 */
const GIT_COMMITS_AHEAD = getSemVerFromGitDescribe(process.env.NORD_DOCS_GIT_VERSION)?.commitsAhead;

/**
 * The version (SemVer) extracted from the local Git repository. Defaults to the version of the package metadata if the
 * "NORD_DOCS_GIT_VERSION" environment variable is not set or empty.
 * @constant {string}
 */
const VERSION = getSemVerFromGitDescribe(process.env.NORD_DOCS_GIT_VERSION)?.raw || metadataNordDocs.version;

/**
 * The version (SemVer) channel extracted from the {@link VERSION}.
 * @constant {string}
 */
const VERSION_CHANNEL = getSemVerFromGitDescribe(process.env.NORD_DOCS_GIT_VERSION)?.channel;

/**
 * The version (SemVer) channel extracted from the {@link VERSION}.
 * @constant {string}
 */
const VERSION_STABILITY_STATUS = getSemVerFromGitDescribe(process.env.NORD_DOCS_GIT_VERSION)?.stabilityStatus;

/**
 * @file Provides general project constants.
 * @since 0.5.0
 */
export { COPYRIGHT_YEAR, DATE_FORMAT, GIT_BRANCH, GIT_COMMITHASH, GIT_COMMITS_AHEAD, VERSION, VERSION_CHANNEL, VERSION_STABILITY_STATUS };
