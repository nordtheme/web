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

const query = value => em(value, typography.sizes.root);

/**
 * Provides media query template functions based on the configured breakpoints.
 *
 * @type {Object}
 * @since 0.3.0
 */
const media = {
  phonePortrait: generateMediaQuery`(max-width: ${query(breakpoints.phoneLandscapeUpperBoundary - 1)})`,
  phoneLandscape: generateMediaQuery`(min-width: ${query(breakpoints.phoneLandscapeUpperBoundary)})`,
  tabletPortrait: generateMediaQuery`(min-width: ${query(breakpoints.tabletPortraitLowerBoundary)})`,
  tabletLandscape: generateMediaQuery`(min-width: ${query(breakpoints.tabletLandscapeLowerBoundary)})`,
  desktop: generateMediaQuery`(min-width: ${query(breakpoints.desktopLowerBoundary)})`,
  desktopPlus: generateMediaQuery`(min-width: ${query(breakpoints.desktopPlus)})`,
  breakpoints
};

export default media;
