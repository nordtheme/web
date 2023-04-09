/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import decodeCodeCharacterHtmlEntities from "./decodeCodeCharacterHtmlEntities";
import getSemVerFromGitDescribe from "./getSemVerFromGitDescribe";
import isRouteInternal from "./isRouteInternal";
import isRoutePartiallyMatch from "./isRoutePartiallyMatch";
import { readSessionCache, writeSessionCache } from "./sessionCache";
import sectionIdFor from "./sectionIdFor";

/**
 * Provides utility functions and classes.
 * @since 0.2.0
 */
export { decodeCodeCharacterHtmlEntities, getSemVerFromGitDescribe, isRouteInternal, isRoutePartiallyMatch, readSessionCache, sectionIdFor, writeSessionCache };
