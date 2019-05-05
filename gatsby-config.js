/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file The Gatsby configuration.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://gatsbyjs.org/docs/gatsby-config
 * @since 0.1.0
 */

/* eslint-disable-next-line import/no-extraneous-dependencies */
const dotenv = require("dotenv");

/*
 * Load environment specific project and OS environment variables based on the current Node environment.
 *
 * @see https://www.gatsbyjs.org/docs/environment-variables
 * @see https://github.com/motdotla/dotenv
 */
dotenv.config({ path: `./.gatsby/.env.${process.env.NODE_ENV}` });

const { metadataNord, metadataNordDocs } = require("./src/data/project");
const {
  optionalBlogPostImages,
  optionalBlogPostVideos,
  requiredBlogPostImages,
  sourceInstanceTypes
} = require("./src/config/internal/nodes");
const {
  BASE_DIR_CONTENT,
  BASE_DIR_ASSETS_IMAGES,
  BASE_DIR_ASSETS_VIDEOS,
  BASE_DIR_CONFIG,
  BASE_DIR_PAGES
} = require("./src/config/internal/constants");
const { BASE_PUBLIC_URL } = require("./src/config/routes/constants");
const gatsbyPluginGoogleGtagConfig = require("./.gatsby/plugins/google/gtag");
const gatsbyPluginManifestConfig = require("./.gatsby/plugins/manifest");
const gatsbyPluginRobotsTxtConfig = require("./.gatsby/plugins/robots-txt");
const gatsbyPluginSourceGraphQlConfig = require("./.gatsby/plugins/source-graphql");
const gatsbyPluginMdxConfig = require("./.gatsby/plugins/mdx");

/**
 * The Gatsby configuration.
 * The `mapping` object includes important mappings related to the optional/required blog post image and video node
 * fields.
 * It maps the paths (string) to a `File` node to make them available for the "Gatsby Sharp" plugin.
 *
 * @see https://www.gatsbyjs.org/docs/gatsby-config/#mapping-node-types
 */
module.exports = {
  siteMetadata: {
    nord: { ...metadataNord },
    ...metadataNordDocs,
    siteUrl: metadataNordDocs.homepage
  },
  mapping: {
    [`Mdx.fields.${optionalBlogPostImages.heroposter.nodeFieldName}`]: "File.absolutePath",
    [`Mdx.fields.${optionalBlogPostVideos.hero.nodeFieldName}`]: "File.absolutePath",
    [`Mdx.fields.${requiredBlogPostImages.banner.nodeFieldName}`]: "File.absolutePath",
    [`Mdx.fields.${requiredBlogPostImages.cover.nodeFieldName}`]: "File.absolutePath",
    [`Mdx.fields.${requiredBlogPostImages.hero.nodeFieldName}`]: "File.absolutePath"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-remove-trailing-slashes",
    "gatsby-plugin-no-sourcemaps",
    "gatsby-transformer-yaml",
    "gatsby-plugin-svgr",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-webpack-size",
    "gatsby-plugin-lodash",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: `${BASE_PUBLIC_URL}`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `${sourceInstanceTypes.images.id}`,
        path: `${__dirname}/${BASE_DIR_ASSETS_IMAGES}`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `${sourceInstanceTypes.videos.id}`,
        path: `${__dirname}/${BASE_DIR_ASSETS_VIDEOS}`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `${sourceInstanceTypes.blog.id}`,
        path: `${__dirname}/${BASE_DIR_CONTENT}/${sourceInstanceTypes.blog.path}/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "config",
        path: `${__dirname}/${BASE_DIR_CONFIG}/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `${sourceInstanceTypes.docs.id}`,
        path: `${__dirname}/${BASE_DIR_CONTENT}/${sourceInstanceTypes.docs.path}/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/${BASE_DIR_PAGES}/`
      }
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: gatsbyPluginGoogleGtagConfig
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: gatsbyPluginRobotsTxtConfig
    },
    {
      resolve: "gatsby-source-graphql",
      options: gatsbyPluginSourceGraphQlConfig
    },
    {
      resolve: "gatsby-mdx",
      options: gatsbyPluginMdxConfig
    },
    /* NOTE: The following plugins rely on the order in this array and must be placed at last in order work properly! */
    {
      resolve: "gatsby-plugin-manifest",
      options: gatsbyPluginManifestConfig
    },
    /*
     * This plugin must definitely be listed last to ensure cache-able files like the web app manifest are included in
     * the service worker!
     */
    "gatsby-plugin-offline"
  ]
};
