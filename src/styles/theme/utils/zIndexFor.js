/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { Z_INDEX_ELEMENT_ORDER } from "../constants";

/**
 * Provides the CSS `z-index` attribute value for the given element name based on the defined order.
 * @method zIndexFor
 * @param {string} element The name of the element to get the `z-index` from.
 * @return {number} The element's order value, `-1` when the given element is invalid.
 * @since 0.3.0
 */
const zIndexFor = (element) => Z_INDEX_ELEMENT_ORDER.indexOf(element);

export default zIndexFor;
