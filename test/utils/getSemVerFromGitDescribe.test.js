/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import { getSemVerFromGitDescribe } from "utils";

const CHANNEL_PRERELEASE = "pre-release";
const CHANNEL_RELEASE = "release";
const CHANNEL_SNAPSHOT = "snapshot";
const CHANNEL_PRERELEASE_SNAPSHOT = `${CHANNEL_PRERELEASE}-${CHANNEL_SNAPSHOT}`;
const STABILITY_STATUS_STABLE = "stable";
const STABILITY_STATUS_UNSTABLE = "unstable";
const SCM_PREFIX = "g";

const PREFIX = "v";
const MAJOR_VERSION = "0";
const MINOR_VERSION = "1";
const PATCH_VERSION = "2";
const COMMITS_AHEAD = "8";
const COMMIT_HASH = "abcd1234";
const PRE_RELEASE_NAME = "frost";
const PRE_RELEASE_NUMBER = "2";
const PRE_RELEASE = `${PRE_RELEASE_NAME}.${PRE_RELEASE_NUMBER}`;
const VERSION = `${MAJOR_VERSION}.${MINOR_VERSION}.${PATCH_VERSION}`;
const VERSION_WITH_PREFIX = `${PREFIX}${VERSION}`;
const VERSION_SNAPSHOT = `${VERSION}-${COMMITS_AHEAD}-${SCM_PREFIX}${COMMIT_HASH}`;
const VERSION_PRE_RELEASE = `${VERSION}-${PRE_RELEASE}`;
const VERSION_PRE_RELEASE_SNAPTSHOT = `${VERSION_PRE_RELEASE}-${COMMITS_AHEAD}-${SCM_PREFIX}${COMMIT_HASH}`;

describe("rejects incompatible SemVer versions", () => {
  test("single commit SHA hash", () => {
    expect(getSemVerFromGitDescribe(COMMIT_HASH)).toBeNull();
  });

  test("empty string and single whitespace", () => {
    expect(getSemVerFromGitDescribe("")).toBeNull();
    expect(getSemVerFromGitDescribe(" ")).toBeNull();
  });

  test("invalid tag/version prefixes", () => {
    [
      `V${VERSION}`,
      `vv${VERSION}`,
      `version${VERSION}`,
      `invalid${VERSION}`,
      `_${VERSION}`,
      `_v${VERSION}`,
      `v_${VERSION}`,
      ` ${VERSION}`,
      ` v${VERSION}`
    ].forEach(invalidVersionPrefix => expect(getSemVerFromGitDescribe(invalidVersionPrefix)).toBeNull());
  });
});

describe("processes valid SemVer versions including additional metadata", () => {
  test("stable release version without any additional metadata", () => {
    const parsedSemVer = getSemVerFromGitDescribe(VERSION_WITH_PREFIX);

    expect(parsedSemVer.version).toBe(VERSION);
    expect(parsedSemVer.prerelease).toHaveLength(0);
    expect(parsedSemVer.build).toHaveLength(0);
    expect(parsedSemVer.commitsAhead).toBe(0);
    expect(parsedSemVer.channel).toBe(CHANNEL_RELEASE);
    expect(parsedSemVer.stabilityStatus).toBe(STABILITY_STATUS_STABLE);
  });

  test("snapshot version with number of commits ahead", () => {
    const parsedSemVer = getSemVerFromGitDescribe(`${PREFIX}${VERSION_SNAPSHOT}`);

    expect(parsedSemVer.version).toBe(VERSION);
    expect(parsedSemVer.prerelease).toHaveLength(0);
    expect(parsedSemVer.build).toHaveLength(1);
    expect(parsedSemVer.build).toContainEqual(COMMIT_HASH);
    expect(parsedSemVer.commitsAhead).toBe(8);
    expect(parsedSemVer.channel).toBe(CHANNEL_SNAPSHOT);
    expect(parsedSemVer.stabilityStatus).toBe(STABILITY_STATUS_UNSTABLE);
    expect(parsedSemVer.raw).toBe(`${VERSION_WITH_PREFIX}+${COMMIT_HASH}`);
  });

  test("pre-release snapshot version with number of commits ahead", () => {
    const parsedSemVer = getSemVerFromGitDescribe(`${PREFIX}${VERSION_PRE_RELEASE_SNAPTSHOT}`);

    expect(parsedSemVer.version).toBe(VERSION_PRE_RELEASE);
    expect(parsedSemVer.prerelease).toHaveLength(2);
    expect(parsedSemVer.prerelease).toContainEqual(PRE_RELEASE_NAME);
    expect(parsedSemVer.prerelease).toContainEqual(Number.parseInt(PRE_RELEASE_NUMBER, 10));
    expect(parsedSemVer.build).toHaveLength(1);
    expect(parsedSemVer.build).toContainEqual(COMMIT_HASH);
    expect(parsedSemVer.commitsAhead).toBe(8);
    expect(parsedSemVer.channel).toBe(CHANNEL_PRERELEASE_SNAPSHOT);
    expect(parsedSemVer.stabilityStatus).toBe(STABILITY_STATUS_UNSTABLE);
    expect(parsedSemVer.raw).toBe(`${PREFIX}${VERSION_PRE_RELEASE}+${COMMIT_HASH}`);
  });
});
