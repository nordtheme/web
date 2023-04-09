/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { modularScale } from "polished";

import typography from "../typography";

/**
 * Shorthand function for polished's `modularScale` helper with pre-configured base and ratio values.
 * @method ms
 * @param {number} step The step to scale up or down.
 * @return {string} The calculated scale with the `em` unit.
 * @since 0.3.0
 * @see https://polished.js.org/docs/#modularscale
 */
const ms = (step) => modularScale(step, `${typography.sizes.msBase}em`, typography.sizes.msName);

export default ms;
