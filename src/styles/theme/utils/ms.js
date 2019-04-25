/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import { modularScale } from "polished";

import typography from "../typography";

/**
 * Shorthand function for polished's `modularScale` helper with pre-configured base and ratio values.
 *
 * @method ms
 * @param {number} step The step to scale up or down.
 * @return {string} The calulcated scale with the `em` unit.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://polished.js.org/docs/#modularscale
 * @since 0.3.0
 */
const ms = step => modularScale(step, `${typography.sizes.msBase}em`, typography.sizes.msName);

export default ms;
