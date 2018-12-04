/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides utility functions for session storage and caching.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.2.0
 */

/**
 * Checks if the global session storage object is available in the current environment.
 *
 * @private
 * @method hasSessionStorage
 * @return {Boolean} `true` if the global session storage object is available, `false` otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
 */
const hasSessionStorage = () => typeof window !== "undefined" && window.sessionStorage !== "undefined";

/**
 * Reads the value of the given key from the session storage (if available).
 *
 * @method readSessionCache
 * @param  {string} key The name of the key from which the value should be read.
 * @return {string|null} The value of the given key, `null` otherwise if the global session storage is not available in
 * the current environment.
 */
const readSessionCache = key => {
  if (hasSessionStorage()) {
    return sessionStorage.getItem(key);
  }
  return null;
};

/**
 * Writes the given key-value pair to the session storage (if available).
 *
 * @method writeSessionCache
 * @param  {string} key The name of the key for the paired value.
 * @param  {string} value The value for the given key.
 * @return {void}, `true` if the value has been set, `false` otherwise if the global session storage is not available
 * in the current environment.
 */
const writeSessionCache = (key, value) => {
  if (hasSessionStorage()) {
    sessionStorage.setItem(key, value);
    return true;
  }
  return false;
};

export { readSessionCache, writeSessionCache };
