/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file The SVGR configuration.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://www.smooth-code.com/open-source/svgr/docs/configuration-files
 * @see https://www.smooth-code.com/open-source/svgr/docs/options
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
   * Export components using React's `forwardRef` API to reference the underlying component and allow access to the
   * root `<svg>` element which is necessary for animations.
   */
  ref: true,

  /* All SVG files in this project are already optimized with SVGO using the included `.svgo.yml` configuration. */
  svgo: false
};
