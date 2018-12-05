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
 * @since 0.2.0
 */

import { em } from "polished";

import breakpoints from "./breakpoints";
import typography from "./typography";
import { generateMediaQuery } from "./utils";

/**
 * Provides media query template functions based on the configured breakpoints.
 *
 * @type {Object}
 * @since 0.3.0
 */
const media = {
  base: generateMediaQuery`(max-width: ${em(breakpoints.minimal - 1, typography.sizes.root)})`,
  minimal: generateMediaQuery`(min-width: ${em(breakpoints.minimal, typography.sizes.root)})`,
  breakpoints
};

export default media;
