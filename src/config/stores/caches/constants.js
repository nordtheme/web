/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { metadataNordDocs } from "data/project";

/**
 * The prefix for keys stored in the session/local storage.
 * @constant {string}
 * @since 0.2.0
 */
const SESSIONSTORAGE_KEY_PREFIX = `${metadataNordDocs.name}`;

/**
 * The separator for keys stored in the session/local storage.
 * @constant {string}
 * @since 0.2.0
 */
const SESSIONSTORAGE_KEY_SEPARATOR = ":";

/**
 * The session/local storage key for the theme mode.
 * @constant {string}
 * @since 0.2.0
 */
const SESSIONSTORAGE_KEY_THEME_MODE = `${SESSIONSTORAGE_KEY_PREFIX}${SESSIONSTORAGE_KEY_SEPARATOR}themeMode`;

/**
 * @file Provides internally cache related store constants.
 * @since 0.2.0
 */
export { SESSIONSTORAGE_KEY_PREFIX, SESSIONSTORAGE_KEY_SEPARATOR, SESSIONSTORAGE_KEY_THEME_MODE };
