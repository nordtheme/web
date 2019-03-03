/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Typefaces and font styles.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://material.io/design/typography/understanding-typography.html
 * @since 0.2.0
 */

/**
 * All available typefaces for different usage scopes.
 *
 * - `main` - The stylistic and visualization typeface used for as root (`<html>`) font family for all site elements.
 * - `straight` - The factual and clear typeface for technical content and documentations.
 * - `monospace` - The main monospaced font for all code related site elements.
 *
 * @type {object}
 * @see https://fonts.google.com/specimen/Rubik
 * @see https://rsms.me/inter
 * @see https://fonts.google.com/specimen/Source+Code+Pro
 */
const typefaces = {
  main: "Rubik",
  monospace: "Source Code Pro",
  straight: "Inter",
  straightVariable: "Inter var"
};

/**
 * The sizes based on the named "modular scale" ratio `1.125` (8:9 "major second"). Only one base is used with a value
 * of `1` for the `em` unit.
 *
 * @see https://www.modularscale.com/?1&em&1.125
 * @see https://polished.js.org/docs/#modularscale
 *
 * @type {object}
 */
const sizes = {
  lineHeight: 1.5,
  msBase: 1,
  msBaseUnit: "rem",
  msName: "majorSecond",
  msRatio: 1.125,
  root: 16,
  rootUnit: "px",
  weight: 400
};

const typography = {
  sizes,
  typefaces
};

export default typography;
