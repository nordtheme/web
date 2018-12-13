/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */

import { Z_INDEX_ELEMENT_ORDER } from "../constants";

/**
 * Provides the CSS `z-index` attribute value for the given element name based on the defined order.
 *
 * @method zIndexFor
 * @param {string} element The name of the element to get the `z-index` from.
 * @return {number} The element's order value, `-1` when the given element is invalid.
 */
const zIndexFor = element => Z_INDEX_ELEMENT_ORDER.indexOf(element);

export default zIndexFor;
