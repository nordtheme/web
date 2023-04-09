/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { SECTION_COMPONENT_IDS } from "config/routes/mappings";

/**
 * Provides the `id` attribute value for the given section component name based on the order.
 * @method sectionIdFor
 * @param {string} route The name of the route.
 * @param {number} order The order of the section component to get the ID from.
 * @return {?string} The section component's `id` attribute value, `undefined` if the given route or order is invalid.
 * @since 0.6.0
 */
const sectionIdFor = (route, order) => SECTION_COMPONENT_IDS?.[route]?.[order];

export default sectionIdFor;
