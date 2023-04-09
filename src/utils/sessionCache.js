/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Checks if the global session storage object is available in the current environment.
 * @private
 * @method hasSessionStorage
 * @return {Boolean} `true` if the global session storage object is available, `false` otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
 */
const hasSessionStorage = () => typeof window !== "undefined" && window.sessionStorage !== "undefined";

/**
 * Reads the value of the given key from the session storage (if available).
 * @method readSessionCache
 * @param  {string} key The name of the key from which the value should be read.
 * @return {string|null} The value of the given key, `null` otherwise if the global session storage is not available in the current environment.
 */
const readSessionCache = (key) => {
  if (hasSessionStorage()) {
    return sessionStorage.getItem(key);
  }
  return null;
};

/**
 * Writes the given key-value pair to the session storage (if available).
 * @method writeSessionCache
 * @param  {string} key The name of the key for the paired value.
 * @param  {string} value The value for the given key.
 * @return {void}, `true` if the value has been set, `false` otherwise if the global session storage is not available in the current environment.
 */
const writeSessionCache = (key, value) => {
  if (hasSessionStorage()) {
    sessionStorage.setItem(key, value);
    return true;
  }
  return false;
};

/**
 * Provides utility functions for session storage and caching.
 * @since 0.2.0
 */
export { readSessionCache, writeSessionCache };
