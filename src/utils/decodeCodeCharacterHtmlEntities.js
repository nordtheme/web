/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Decodes all code character (numeric) HTML entities found in the given text.
 * @method decodeCodeCharacterHtmlEntities
 * @param {string} text The text from which all code character (numeric) HTML entities should be decoded.
 * @return {string} The string with decoded HTML entities.
 * @since 0.7.0
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
 */
const decodeCodeCharacterHtmlEntities = (text) => text.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));

export default decodeCodeCharacterHtmlEntities;
