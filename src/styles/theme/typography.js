/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * All available typefaces for different usage scopes.
 *   - `main` - The stylistic and visualization typeface used for as root (`<html>`) font family for all site elements.
 *   - `straight` - The factual and clear typeface for technical content and documentations.
 *   - `monospace` - The main monospaced font for all code related site elements.
 * @type {object}
 * @see https://fonts.google.com/specimen/Rubik
 * @see https://rsms.me/inter
 * @see https://fonts.google.com/specimen/Source+Code+Pro
 */
const typefaces = {
  main: "Rubik",
  monospace: "Source Code Pro",
  straight: "Inter",
  straightVariable: "Inter var",
};

/**
 * The sizes based on the named "modular scale" ratio `1.125` (8:9 "major second"). Only one base is used with a value of `1` for the `em` unit.
 * @type {object}
 * @see https://www.modularscale.com/?1&em&1.125
 * @see https://polished.js.org/docs/#modularscale
 */
const sizes = {
  lineHeight: 1.5,
  msBase: 1,
  msBaseUnit: "rem",
  msName: "majorSecond",
  msRatio: 1.125,
  root: 16,
  rootUnit: "px",
  weight: 400,
};

const typography = {
  sizes,
  typefaces,
};

/**
 * @file Provides typefaces and font styles.
 * @since 0.2.0
 * @see https://m2.material.io/design/typography/understanding-typography.html#type-properties
 */
export default typography;
