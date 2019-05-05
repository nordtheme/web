/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides internally used constants.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.1.0
 */

/**
 *  The relative path of the content base directory starting from the project root.
 *
 * @constant {string}
 * @since 0.1.0
 */
const BASE_DIR_CONTENT = "content";

/**
 *  The relative path of the sources base directory starting from the project root.
 *
 * @constant {string}
 * @since 0.1.0
 */
const BASE_DIR_SRC = "src";

/**
 *  The relative path of the assets base directory starting from the project root.
 *
 * @constant {string}
 * @since 0.1.0
 */
const BASE_DIR_ASSETS = `${BASE_DIR_SRC}/assets`;

/**
 *  The relative path of the assets directory for images starting from the project root.
 *
 * @constant {string}
 * @since 0.1.0
 */
const BASE_DIR_ASSETS_IMAGES = `${BASE_DIR_ASSETS}/images`;

/**
 *  The relative path of the assets directory for videos starting from the project root.
 *
 * @constant {string}
 * @since 0.12.0
 */
const BASE_DIR_ASSETS_VIDEOS = `${BASE_DIR_ASSETS}/videos`;

/**
 *  The relative path of the build base directory starting from the project root.
 *
 * @constant {string}
 * @since 0.1.0
 */
const BASE_DIR_BUILD = "build";

/**
 *  The relative path of the build base directory for reports starting from the project root.
 *
 * @constant {string}
 * @since 0.1.0
 */
const BASE_DIR_BUILD_REPORTS = `${BASE_DIR_BUILD}/reports`;

/**
 *  The relative path of the build base directory for coverage reports starting from the project root.
 *
 * @constant {string}
 * @since 0.1.0
 */
const BASE_DIR_BUILD_REPORTS_COVERAGE = `${BASE_DIR_BUILD_REPORTS}/coverage`;

/**
 *  The relative path of the build base directory for JUnit reports starting from the project root.
 *
 * @constant {string}
 * @since 0.1.0
 */
const BASE_DIR_BUILD_REPORTS_JUNIT = `${BASE_DIR_BUILD_REPORTS}/junit`;

/**
 *  The relative path of the config base directory starting from the project root.
 *
 * @constant {string}
 * @since 0.1.0
 */
const BASE_DIR_CONFIG = `${BASE_DIR_SRC}/config`;

/**
 *  The relative path of the pages base directory starting from the project root.
 *
 * @constant {string}
 * @since 0.1.0
 */
const BASE_DIR_PAGES = `${BASE_DIR_SRC}/pages`;

/**
 * The minimum height for required blog post images.
 *
 * @constant {number}
 * @since 0.10.0
 */
const BLOG_POST_IMAGE_MIN_HEIGHT = 920;

/**
 * The minimum width for blog post banner images.
 *
 * @constant {number}
 * @since 0.10.0
 */
const BLOG_POST_IMAGE_BANNER_MIN_WIDTH = BLOG_POST_IMAGE_MIN_HEIGHT * 1.7;

/**
 * The minimum width for blog post cover images.
 *
 * @constant {number}
 * @since 0.10.0
 */
const BLOG_POST_IMAGE_COVER_MIN_WIDTH = BLOG_POST_IMAGE_MIN_HEIGHT * 0.85;

/**
 * The minimum width for blog post hero images.
 *
 * @constant {number}
 * @since 0.10.0
 */
const BLOG_POST_IMAGE_HERO_MIN_WIDTH = BLOG_POST_IMAGE_MIN_HEIGHT * 1.8;

/**
 * The internal type for Gatsby sharp images.
 *
 * @constant {string}
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-sharp
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sharp
 * @see https://github.com/lovell/sharp
 * @since 0.12.0
 */
const NODE_TYPE_IMAGE_SHARP = "ImageSharp";

/**
 * The internal type for MDX nodes.
 *
 * @constant {string}
 * @see https://github.com/mdx-js/mdx
 * @since 0.1.0
 */
const NODE_TYPE_MDX = "Mdx";

/**
 * Regular expression to match the date of a blog post from the file path.
 *
 * @constant {RegExp}
 * @since 0.1.0
 */
const REGEX_BLOG_POST_DATE = /([0-9]+)\/([0-9]+)\/([0-9]+)\/(.+)/;

module.exports = {
  BASE_DIR_ASSETS,
  BASE_DIR_ASSETS_IMAGES,
  BASE_DIR_ASSETS_VIDEOS,
  BASE_DIR_BUILD,
  BASE_DIR_BUILD_REPORTS,
  BASE_DIR_BUILD_REPORTS_COVERAGE,
  BASE_DIR_BUILD_REPORTS_JUNIT,
  BASE_DIR_CONFIG,
  BASE_DIR_CONTENT,
  BASE_DIR_PAGES,
  BLOG_POST_IMAGE_MIN_HEIGHT,
  BLOG_POST_IMAGE_BANNER_MIN_WIDTH,
  BLOG_POST_IMAGE_COVER_MIN_WIDTH,
  BLOG_POST_IMAGE_HERO_MIN_WIDTH,
  NODE_TYPE_IMAGE_SHARP,
  NODE_TYPE_MDX,
  REGEX_BLOG_POST_DATE
};
