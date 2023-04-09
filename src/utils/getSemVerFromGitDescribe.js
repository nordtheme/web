/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import semver from "semver";

/**
 * Returns the channel based on the passed build metadata and pre-release version.
 * @private
 * @method getVersionChannel
 * @param  {Array<string>} build The build metadata of the version from which the channel should be extracted.
 * @param  {Array<(string|number)>} prerelease The pre-release version from which the channel should be extracted.
 * @return {string} The channel of the passed version.
 */
const getVersionChannel = (build, prerelease) => {
  if (build.length !== 0) {
    if (prerelease.length !== 0) {
      return "pre-release-snapshot";
    }
    return "snapshot";
  }

  if (prerelease.length !== 0) {
    return "pre-release";
  }
  return "release";
};

/**
 * Returns the stability status of the passed (SemVer) version.
 * @private
 * @method getVersionStabilityStatus
 * @param  {Array<string>} build The build metadata of the version from which the channel should be extracted.
 * @param  {Array<(string|number)>} prerelease The pre-release version from which the channel should be extracted.
 * @return {string} The stability status of the passed version.
 */
const getVersionStabilityStatus = (build, prerelease) => {
  if (build.length === 0 && prerelease.length === 0) {
    return "stable";
  }
  return "unstable";
};

/**
 * Converts the output from the Git "describe --always" command to a SemVer version.
 * @method getSemVerFromGitDescribe
 * @param  {string} gitVersion The output of the Git "describe --always" command
 * @return {?Object} The SemVer information, `null` otherwise if the passed `gitVersion` is not compatible with SemVer.
 * @see https://semver.org
 */
const getSemVerFromGitDescribe = (gitVersion) => {
  /*
   * Split the Git version output where the array index
   *
   * - [0] contains the value of the recent tag that is reachable from the latest commit, or the hash of the latest
   *   commit if no tags have been found, e.g. "v0.1.8" or "9b205b0".
   * - [1]/[2] contains, separated with a dash character, either
   *     - the pre-release string
   *     - the count of additional commits on top of the tag string (when found).
   * - [2]/[3] contains, separated with a dash character, either
   *     - the contain the count of additional commits (if not already contained in index [1])
   *     - the hash of the latest commit prefixed with the "g" character
   */
  const gitVersionElements = gitVersion.split("-");

  /* Reject invalid strings and single commit SHA hashes not compatible with SemVer. */
  if (gitVersionElements.length === 1 && !semver.valid(gitVersionElements[0])) return null;

  const tagElement = gitVersionElements[0];
  let buildMetadataElement = "";
  let commitsAhead = 0;
  let preReleaseElement = "";
  let scmPrefix = "";

  /* Extract necessary elements from array and remove count of ahead commits afterwards. */
  if (gitVersionElements.length >= 3) {
    buildMetadataElement = gitVersionElements[gitVersionElements.length - 1];
    commitsAhead = Number.parseInt(gitVersionElements[gitVersionElements.length - 2], 10);

    /**
     * Remove the prefix character added by "git describe" that indicates the SCM type (where "g" means "Git").
     * @see https://git-scm.com/docs/git-describe
     */
    if (buildMetadataElement.charAt(0) === "g") {
      buildMetadataElement = buildMetadataElement.substring(1);
      scmPrefix = "g";

      /**
       * Prepend the separator character for build metadata as defined in the SemVer specification.
       * @see https://semver.org/#spec-item-10
       */
      buildMetadataElement = `+${buildMetadataElement}`;
    }

    gitVersionElements.splice(gitVersionElements.length - 2, 1);
  }

  /**
   * Extract the pre-release element and prepend the separator as defined in the SemVer specification.
   * @see https://semver.org/#spec-item-9
   */
  if (gitVersionElements.length > 2) {
    preReleaseElement = gitVersionElements[gitVersionElements.length - 2];
    preReleaseElement = `-${preReleaseElement}`;
  }

  const parsedSemVer = semver.parse(`${tagElement}${preReleaseElement}${buildMetadataElement}`, {
    includePrerelease: true,
  });

  /* Append additional useful information about the version. */
  parsedSemVer.commitsAhead = commitsAhead;
  parsedSemVer.channel = getVersionChannel(parsedSemVer.build, parsedSemVer.prerelease);
  parsedSemVer.scmPrefix = scmPrefix;
  parsedSemVer.stabilityStatus = getVersionStabilityStatus(parsedSemVer.build, parsedSemVer.prerelease);

  return parsedSemVer;
};

/**
 * Provides utility functions to get Git SemVer version information.
 * @since 0.5.0
 * @see https://git-scm.com/docs/git-describe
 * @see https://semver.org
 */
export default getSemVerFromGitDescribe;
