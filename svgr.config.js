/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Configurations for SVGR.
 * @see https://react-svgr.com/docs/configuration-files
 * @see https://react-svgr.com/docs/options
 * @since 0.3.0
 */
module.exports = {
  /* Always spread props (`{...props}`) last on the root `<svg>` element. */
  expandProps: "end",

  /* Use the JSX file extension for generated components. */
  ext: "jsx",

  /*  Don't add the `width` and `height` props (hardcoded `1em` value). */
  icon: false,

  /*
   * Export components using React's `forwardRef` API to reference the underlying component and allow access to the root `<svg>` element which is
   * necessary for animations.
   */
  ref: true,

  /* All SVG files in this project are already optimized with SVGO using the included `.svgo.yml` configuration. */
  svgo: false,
};
