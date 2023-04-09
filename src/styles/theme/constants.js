/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Name of Nord's "bright snow flurry" aura for usage as theme mode.
 * @constant {string}
 * @since 0.2.0
 */
const MODE_BRIGHT_SNOW_FLURRY = "BRIGHT_SNOW_FLURRY";

/**
 * Name of Nord's "dark night frost" aura for usage as theme mode.
 * @constant {string}
 * @since 0.2.0
 */
const MODE_DARK_NIGHT_FROST = "DARK_NIGHT_FROST";

/**
 * The name of the theme key for "theme modes".
 * @constant {string}
 * @since 0.2.0
 */
const THEME_KEY_MODE = "mode";

/**
 * The elements a `z-index` value is required for.
 * @constant {Object}
 * @since 0.3.0
 */
const Z_INDEX_ELEMENTS = {
  CONTENT: "content",
  DECORATIONS: "decorations",
  HEADER: "header",
  HEADER_COMPACT_SLIDE_MENU: "header-compact-slide-menu",
  MAIN: "main",
};

/**
 * The order of the available elements.
 * @constant {Array<string>}
 * @since 0.3.0
 */
const Z_INDEX_ELEMENT_ORDER = [
  Z_INDEX_ELEMENTS.DECORATIONS,
  Z_INDEX_ELEMENTS.MAIN,
  Z_INDEX_ELEMENTS.CONTENT,
  Z_INDEX_ELEMENTS.HEADER,
  Z_INDEX_ELEMENTS.HEADER_COMPACT_SLIDE_MENU,
];

/**
 * Provides theme constants.
 * @since 0.2.0
 */
export { MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST, THEME_KEY_MODE, Z_INDEX_ELEMENTS, Z_INDEX_ELEMENT_ORDER };
