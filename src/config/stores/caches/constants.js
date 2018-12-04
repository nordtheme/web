/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides internally cache related store constants.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.2.0
 */

import { metadataNordDocs } from "data/project";

/**
 * The prefix for keys stored in the session/local storage.
 *
 * @constant {string}
 * @since 0.2.0
 */
const SESSIONSTORAGE_KEY_PREFIX = `${metadataNordDocs.name}`;

/**
 * The separator for keys stored in the session/local storage.
 *
 * @constant {string}
 * @since 0.2.0
 */
const SESSIONSTORAGE_KEY_SEPARATOR = ":";

/**
 * The session/local storage key for the theme mode.
 *
 * @constant {string}
 * @since 0.2.0
 */
const SESSIONSTORAGE_KEY_THEME_MODE = `${SESSIONSTORAGE_KEY_PREFIX}${SESSIONSTORAGE_KEY_SEPARATOR}themeMode`;

export { SESSIONSTORAGE_KEY_PREFIX, SESSIONSTORAGE_KEY_SEPARATOR, SESSIONSTORAGE_KEY_THEME_MODE };
