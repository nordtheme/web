/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * Decodes all code character (numeric) HTML entities found in the given text.
 *
 * @method decodeCodeCharacterHtmlEntities
 * @param {string} text The text from which all code character (numeric) HTML entities should be decoded.
 * @return {string} The string with decoded HTML entities.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.7.0
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
 */
const decodeCodeCharacterHtmlEntities = text => text.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));

export default decodeCodeCharacterHtmlEntities;
