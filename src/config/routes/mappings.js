/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides route mapping constants.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.1.0
 */

const {
  BLOG,
  COMMUNITY,
  DOCS,
  DOCS_COLORS_AND_PALETTES,
  DOCS_SWATCHES,
  DOCS_USAGE,
  LANDING,
  PORTS,
  ROOT
} = require("./constants");

/**
 * The root route mapping.
 *
 * @constant {string}
 * @since 0.1.0
 */
const ROUTE_ROOT = ROOT;

/**
 * The route mapping for the `blog` page.
 *
 * @constant {string}
 * @since 0.1.0
 */
const ROUTE_BLOG = ROUTE_ROOT + BLOG;

/**
 * The route mapping for the `community` page.
 *
 * @constant {string}
 * @since 0.3.0
 */
const ROUTE_COMMUNITY = ROUTE_ROOT + COMMUNITY;

/**
 * The route mapping for the `docs` page.
 *
 * @constant {string}
 * @since 0.1.0
 */
const ROUTE_DOCS = ROUTE_ROOT + DOCS;

/**
 * The route mapping for the docs page of the "Nord Atom Syntax" port project.
 *
 * @constant {string}
 * @since 0.19.0
 */
const ROUTE_DOCS_PORTS_ATOM_SYNTAX = `${ROUTE_ROOT}${DOCS}/${PORTS}/atom-syntax`;

/**
 * The route mapping for the configuration docs page of the "Nord Atom Syntax" port project.
 *
 * @constant {string}
 * @since 0.19.0
 */
const ROUTE_DOCS_PORTS_ATOM_SYNTAX_CONFIGURATION = `${ROUTE_DOCS_PORTS_ATOM_SYNTAX}/configuration`;

/**
 * The route mapping for the development docs page of the "Nord Atom Syntax" port project.
 *
 * @constant {string}
 * @since 0.19.0
 */
const ROUTE_DOCS_PORTS_ATOM_SYNTAX_DEVELOPMENT = `${ROUTE_DOCS_PORTS_ATOM_SYNTAX}/development`;

/**
 * The route mapping for the installation docs page of the "Nord Atom Syntax" port project.
 *
 * @constant {string}
 * @since 0.19.0
 */
const ROUTE_DOCS_PORTS_ATOM_SYNTAX_INSTALLATION = `${ROUTE_DOCS_PORTS_ATOM_SYNTAX}/installation`;

/**
 * The route mapping for the language and package support docs page of the "Nord Atom Syntax" port project.
 *
 * @constant {string}
 * @since 0.19.0
 */
const ROUTE_DOCS_PORTS_ATOM_SYNTAX_SUPPORT = `${ROUTE_DOCS_PORTS_ATOM_SYNTAX}/support`;

/**
 * The route mapping for the troubleshooting guide docs page of the "Nord Atom Syntax" port project.
 *
 * @constant {string}
 * @since 0.19.0
 */
const ROUTE_DOCS_PORTS_ATOM_SYNTAX_TROUBLESHOOTING = `${ROUTE_DOCS_PORTS_ATOM_SYNTAX}/troubleshooting`;

/**
 * The route mapping for the docs page of the "Nord Atom UI" port project.
 *
 * @constant {string}
 * @since 0.19.0
 */
const ROUTE_DOCS_PORTS_ATOM_UI = `${ROUTE_ROOT}${DOCS}/${PORTS}/atom-ui`;

/**
 * The route mapping for the configuration docs page of the "Nord Atom UI" port project.
 *
 * @constant {string}
 * @since 0.19.0
 */
const ROUTE_DOCS_PORTS_ATOM_UI_CONFIGURATION = `${ROUTE_DOCS_PORTS_ATOM_UI}/configuration`;

/**
 * The route mapping for the development docs page of the "Nord Atom UI" port project.
 *
 * @constant {string}
 * @since 0.19.0
 */
const ROUTE_DOCS_PORTS_ATOM_UI_DEVELOPMENT = `${ROUTE_DOCS_PORTS_ATOM_UI}/development`;

/**
 * The route mapping for the installation docs page of the "Nord Atom UI" port project.
 *
 * @constant {string}
 * @since 0.19.0
 */
const ROUTE_DOCS_PORTS_ATOM_UI_INSTALLATION = `${ROUTE_DOCS_PORTS_ATOM_UI}/installation`;

/**
 * The route mapping for the language and package support docs page of the "Nord Atom UI" port project.
 *
 * @constant {string}
 * @since 0.19.0
 */
const ROUTE_DOCS_PORTS_ATOM_UI_SUPPORT = `${ROUTE_DOCS_PORTS_ATOM_UI}/support`;

/**
 * The route mapping for the troubleshooting guide docs page of the "Nord Atom UI" port project.
 *
 * @constant {string}
 * @since 0.19.0
 */
const ROUTE_DOCS_PORTS_ATOM_UI_TROUBLESHOOTING = `${ROUTE_DOCS_PORTS_ATOM_UI}/troubleshooting`;

/**
 * The route mapping for the docs page of the "Nord dircolors" port project.
 *
 * @constant {string}
 * @since 0.18.0
 */
const ROUTE_DOCS_PORTS_DIRCOLORS = `${ROUTE_ROOT}${DOCS}/${PORTS}/dircolors`;

/**
 * The route mapping for the installation docs page of the "Nord dircolors" port project.
 *
 * @constant {string}
 * @since 0.18.0
 */
const ROUTE_DOCS_PORTS_DIRCOLORS_INSTALLATION = `${ROUTE_DOCS_PORTS_DIRCOLORS}/installation`;

/**
 * The route mapping for the theme plugin support docs page of the "Nord dircolors" port project.
 *
 * @constant {string}
 * @since 0.18.0
 */
const ROUTE_DOCS_PORTS_DIRCOLORS_TYPE_SUPPORT = `${ROUTE_DOCS_PORTS_DIRCOLORS}/type-support`;

/**
 * The route mapping for the docs page of the "Nord Emacs" port project.
 *
 * @constant {string}
 * @since 0.17.0
 */
const ROUTE_DOCS_PORTS_EMACS = `${ROUTE_ROOT}${DOCS}/${PORTS}/emacs`;

/**
 * The route mapping for the configuration docs page of the "Nord Emacs" port project.
 *
 * @constant {string}
 * @since 0.17.0
 */
const ROUTE_DOCS_PORTS_EMACS_CONFIGURATION = `${ROUTE_DOCS_PORTS_EMACS}/configuration`;

/**
 * The route mapping for the development docs page of the "Nord Emacs" port project.
 *
 * @constant {string}
 * @since 0.17.0
 */
const ROUTE_DOCS_PORTS_EMACS_DEVELOPMENT = `${ROUTE_DOCS_PORTS_EMACS}/development`;

/**
 * The route mapping for the installation docs page of the "Nord Emacs" port project.
 *
 * @constant {string}
 * @since 0.17.0
 */
const ROUTE_DOCS_PORTS_EMACS_INSTALLATION = `${ROUTE_DOCS_PORTS_EMACS}/installation`;

/**
 * The route mapping for the language and package support docs page of the "Nord Emacs" port project.
 *
 * @constant {string}
 * @since 0.17.0
 */
const ROUTE_DOCS_PORTS_EMACS_SUPPORT = `${ROUTE_DOCS_PORTS_EMACS}/support`;

/**
 * The route mapping for the troubleshooting guide docs page of the "Nord Emacs" port project.
 *
 * @constant {string}
 * @since 0.17.0
 */
const ROUTE_DOCS_PORTS_EMACS_TROUBLESHOOTING = `${ROUTE_DOCS_PORTS_EMACS}/troubleshooting`;

/**
 * The route mapping for the docs page of the "Nord JetBrains" port project.
 *
 * @constant {string}
 * @since 0.12.0
 */
const ROUTE_DOCS_PORTS_JETBRAINS = `${ROUTE_ROOT}${DOCS}/${PORTS}/jetbrains`;

/**
 * The route mapping for the development docs page of the "Nord JetBrains" port project.
 *
 * @constant {string}
 * @since 0.12.0
 */
const ROUTE_DOCS_PORTS_JETBRAINS_DEVELOPMENT = `${ROUTE_DOCS_PORTS_JETBRAINS}/development`;

/**
 * The route mapping for the installation docs page of the "Nord JetBrains" port project.
 *
 * @constant {string}
 * @since 0.12.0
 */
const ROUTE_DOCS_PORTS_JETBRAINS_INSTALLATION = `${ROUTE_DOCS_PORTS_JETBRAINS}/installation`;

/**
 * The route mapping for the language and plugin support docs page of the "Nord JetBrains" port project.
 *
 * @constant {string}
 * @since 0.12.0
 */
const ROUTE_DOCS_PORTS_JETBRAINS_SUPPORT = `${ROUTE_DOCS_PORTS_JETBRAINS}/support`;

/**
 * The route mapping for the troubleshooting guide docs page of the "Nord JetBrains" port project.
 *
 * @constant {string}
 * @since 0.12.0
 */
const ROUTE_DOCS_PORTS_JETBRAINS_TROUBLESHOOTING = `${ROUTE_DOCS_PORTS_JETBRAINS}/troubleshooting`;

/**
 * The route mapping for the docs page of the "Nord Sublime Text" port project.
 *
 * @constant {string}
 * @since 0.20.0
 */
const ROUTE_DOCS_PORTS_SUBLIME_TEXT = `${ROUTE_ROOT}${DOCS}/${PORTS}/sublime-text`;

/**
 * The route mapping for the development docs page of the "Nord Sublime Text" port project.
 *
 * @constant {string}
 * @since 0.20.0
 */
const ROUTE_DOCS_PORTS_SUBLIME_TEXT_DEVELOPMENT = `${ROUTE_DOCS_PORTS_SUBLIME_TEXT}/development`;

/**
 * The route mapping for the installation docs page of the "Nord Sublime Text" port project.
 *
 * @constant {string}
 * @since 0.20.0
 */
const ROUTE_DOCS_PORTS_SUBLIME_TEXT_INSTALLATION = `${ROUTE_DOCS_PORTS_SUBLIME_TEXT}/installation`;

/**
 * The route mapping for the docs page of the "Nord tmux" port project.
 *
 * @constant {string}
 * @since 0.16.0
 */
const ROUTE_DOCS_PORTS_TMUX = `${ROUTE_ROOT}${DOCS}/${PORTS}/tmux`;

/**
 * The route mapping for the theme configuration docs page of the "Nord tmux" port project.
 *
 * @constant {string}
 * @since 0.16.0
 */
const ROUTE_DOCS_PORTS_TMUX_CONFIGURATION = `${ROUTE_DOCS_PORTS_TMUX}/configuration`;

/**
 * The route mapping for the installation docs page of the "Nord tmux" port project.
 *
 * @constant {string}
 * @since 0.16.0
 */
const ROUTE_DOCS_PORTS_TMUX_INSTALLATION = `${ROUTE_DOCS_PORTS_TMUX}/installation`;

/**
 * The route mapping for the theme plugin support docs page of the "Nord tmux" port project.
 *
 * @constant {string}
 * @since 0.16.0
 */
const ROUTE_DOCS_PORTS_TMUX_PLUGIN_SUPPORT = `${ROUTE_DOCS_PORTS_TMUX}/plugin-support`;

/**
 * The route mapping for the docs page of the "Nord Vim" port project.
 *
 * @constant {string}
 * @since 0.13.0
 */
const ROUTE_DOCS_PORTS_VIM = `${ROUTE_ROOT}${DOCS}/${PORTS}/vim`;

/**
 * The route mapping for the theme configuration docs page of the "Nord Vim" port project.
 *
 * @constant {string}
 * @since 0.13.0
 */
const ROUTE_DOCS_PORTS_VIM_CONFIGURATION = `${ROUTE_DOCS_PORTS_VIM}/configuration`;

/**
 * The route mapping for the theme customization docs page of the "Nord Vim" port project.
 *
 * @constant {string}
 * @since 0.13.0
 */
const ROUTE_DOCS_PORTS_VIM_CUSTOMIZATION = `${ROUTE_DOCS_PORTS_VIM}/customization`;

/**
 * The route mapping for the installation docs page of the "Nord Vim" port project.
 *
 * @constant {string}
 * @since 0.13.0
 */
const ROUTE_DOCS_PORTS_VIM_INSTALLATION = `${ROUTE_DOCS_PORTS_VIM}/installation`;

/**
 * The route mapping for the docs page of the "Nord Visual Studio Code" port project.
 *
 * @constant {string}
 * @since 0.15.0
 */
const ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE = `${ROUTE_ROOT}${DOCS}/${PORTS}/visual-studio-code`;

/**
 * The route mapping for the theme customization docs page of the "Nord Visual Studio Code" port project.
 *
 * @constant {string}
 * @since 0.15.0
 */
const ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE_CUSTOMIZATION = `${ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE}/customization`;

/**
 * The route mapping for the development docs page of the "Nord Visual Studio Code" port project.
 *
 * @constant {string}
 * @since 0.15.0
 */
const ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE_DEVELOPMENT = `${ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE}/development`;

/**
 * The route mapping for the installation docs page of the "Nord Visual Studio Code" port project.
 *
 * @constant {string}
 * @since 0.15.0
 */
const ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE_INSTALLATION = `${ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE}/installation`;

/**
 * The route mapping for the `docs` page about Nord's colors and palettes.
 *
 * @constant {string}
 * @since 0.11.0
 */
const ROUTE_DOCS_COLOR_AND_PALETTES = `${ROUTE_ROOT}${DOCS}/${DOCS_COLORS_AND_PALETTES}`;

/**
 * The route mapping for the `docs` page about Nord's color swatches.
 *
 * @constant {string}
 * @since 0.11.0
 */
const ROUTE_DOCS_SWATCHES = `${ROUTE_ROOT}${DOCS}/${DOCS_SWATCHES}`;

/**
 * The route mapping for the `docs` page about Nord's installation and usage.
 *
 * @constant {string}
 * @since 0.11.0
 */
const ROUTE_DOCS_USAGE = `${ROUTE_ROOT}${DOCS}/${DOCS_USAGE}`;

/**
 * The route mapping for the landing page.
 * Alias that will be redirected to `${ROUTE_ROOT}`.
 *
 * @constant {string}
 * @since 0.1.0
 */
const ROUTE_LANDING = ROUTE_ROOT + LANDING;

/**
 * The route mapping for the port projects page.
 *
 * @constant {string}
 * @since 0.3.0
 */
const ROUTE_PORTS = ROUTE_ROOT + PORTS;

/**
 * The route mapping for the "Nord Atom Syntax" port project page.
 *
 * @constant {string}
 * @since 0.19.0
 */
const ROUTE_PORTS_ATOM_SYNTAX = `${ROUTE_ROOT}${PORTS}/atom-syntax`;

/**
 * The route mapping for the "Nord Atom UI" port project page.
 *
 * @constant {string}
 * @since 0.19.0
 */
const ROUTE_PORTS_ATOM_UI = `${ROUTE_ROOT}${PORTS}/atom-ui`;

/**
 * The route mapping for the "Nord dircolors" port project page.
 *
 * @constant {string}
 * @since 0.18.0
 */
const ROUTE_PORTS_DIRCOLORS = `${ROUTE_ROOT}${PORTS}/dircolors`;

/**
 * The route mapping for the "Nord Emacs" port project page.
 *
 * @constant {string}
 * @since 0.17.0
 */
const ROUTE_PORTS_EMACS = `${ROUTE_ROOT}${PORTS}/emacs`;

/**
 * The route mapping for the "Nord JetBrains" port project page.
 *
 * @constant {string}
 * @since 0.12.0
 */
const ROUTE_PORTS_JETBRAINS = `${ROUTE_ROOT}${PORTS}/jetbrains`;

/**
 * The route mapping for the "Nord Sublime Text" port project page.
 *
 * @constant {string}
 * @since 0.20.0
 */
const ROUTE_PORTS_SUBLIME_TEXT = `${ROUTE_ROOT}${PORTS}/sublime-text`;

/**
 * The route mapping for the "Nord tmux" port project page.
 *
 * @constant {string}
 * @since 0.16.0
 */
const ROUTE_PORTS_TMUX = `${ROUTE_ROOT}${PORTS}/tmux`;

/**
 * The route mapping for the "Nord Vim" port project page.
 *
 * @constant {string}
 * @since 0.13.0
 */
const ROUTE_PORTS_VIM = `${ROUTE_ROOT}${PORTS}/vim`;

/**
 * The route mapping for the "Nord Visual Studio Code" port project page.
 *
 * @constant {string}
 * @since 0.15.0
 */
const ROUTE_PORTS_VISUAL_STUDIO_CODE = `${ROUTE_ROOT}${PORTS}/visual-studio-code`;

/**
 * The per-route unique `id` attribute values of sections components.
 *
 * @constant {Object}
 * @since 0.6.0
 */
const SECTION_COMPONENT_IDS = {
  [ROUTE_COMMUNITY]: ["hero", "chat-channels", "content"],
  [ROUTE_DOCS]: ["hero", "contents"],
  [ROUTE_DOCS_PORTS_ATOM_SYNTAX]: ["hero", "contents"],
  [ROUTE_DOCS_PORTS_ATOM_UI]: ["hero", "contents"],
  [ROUTE_DOCS_PORTS_DIRCOLORS]: ["hero", "contents"],
  [ROUTE_DOCS_PORTS_EMACS]: ["hero", "contents"],
  [ROUTE_DOCS_PORTS_JETBRAINS]: ["hero", "contents"],
  [ROUTE_DOCS_PORTS_SUBLIME_TEXT]: ["hero", "contents"],
  [ROUTE_DOCS_PORTS_TMUX]: ["hero", "contents"],
  [ROUTE_DOCS_PORTS_VIM]: ["hero", "contents"],
  [ROUTE_PORTS]: ["hero", "search"],
  [ROUTE_PORTS_ATOM_SYNTAX]: ["hero", "introduction", "syntax", "editor-details", "package-support", "setup"],
  [ROUTE_PORTS_ATOM_UI]: ["hero", "introduction", "ui-elements", "package-support", "configurations", "setup"],
  [ROUTE_PORTS_DIRCOLORS]: ["hero", "introduction", "setup"],
  [ROUTE_PORTS_EMACS]: ["hero", "introduction", "syntax", "editor-details", "configurations", "setup"],
  [ROUTE_PORTS_JETBRAINS]: ["hero", "introduction", "syntax", "editor-details", "ui-elements", "setup"],
  [ROUTE_PORTS_SUBLIME_TEXT]: ["hero", "introduction", "syntax", "editor-details", "setup"],
  [ROUTE_PORTS_TMUX]: ["hero", "introduction", "ui-elements", "plugin-support", "configurations", "setup"],
  [ROUTE_PORTS_VIM]: ["hero", "introduction", "syntax", "editor-details", "plugin-support", "configurations", "setup"],
  [ROUTE_PORTS_VISUAL_STUDIO_CODE]: ["hero", "introduction", "syntax", "editor-details", "ui-elements", "setup"],
  [ROUTE_ROOT]: [
    "hero",
    "palettes-modularity",
    "palettes-contrast",
    "ports",
    "swatches",
    "syntax-highlighting",
    "community"
  ]
};

module.exports = {
  ROUTE_BLOG,
  ROUTE_COMMUNITY,
  ROUTE_DOCS_COLOR_AND_PALETTES,
  ROUTE_DOCS_PORTS_ATOM_SYNTAX,
  ROUTE_DOCS_PORTS_ATOM_SYNTAX_CONFIGURATION,
  ROUTE_DOCS_PORTS_ATOM_SYNTAX_DEVELOPMENT,
  ROUTE_DOCS_PORTS_ATOM_SYNTAX_INSTALLATION,
  ROUTE_DOCS_PORTS_ATOM_SYNTAX_SUPPORT,
  ROUTE_DOCS_PORTS_ATOM_SYNTAX_TROUBLESHOOTING,
  ROUTE_DOCS_PORTS_ATOM_UI,
  ROUTE_DOCS_PORTS_ATOM_UI_CONFIGURATION,
  ROUTE_DOCS_PORTS_ATOM_UI_DEVELOPMENT,
  ROUTE_DOCS_PORTS_ATOM_UI_INSTALLATION,
  ROUTE_DOCS_PORTS_ATOM_UI_SUPPORT,
  ROUTE_DOCS_PORTS_ATOM_UI_TROUBLESHOOTING,
  ROUTE_DOCS_PORTS_DIRCOLORS,
  ROUTE_DOCS_PORTS_DIRCOLORS_INSTALLATION,
  ROUTE_DOCS_PORTS_DIRCOLORS_TYPE_SUPPORT,
  ROUTE_DOCS_PORTS_EMACS,
  ROUTE_DOCS_PORTS_EMACS_CONFIGURATION,
  ROUTE_DOCS_PORTS_EMACS_DEVELOPMENT,
  ROUTE_DOCS_PORTS_EMACS_INSTALLATION,
  ROUTE_DOCS_PORTS_EMACS_SUPPORT,
  ROUTE_DOCS_PORTS_EMACS_TROUBLESHOOTING,
  ROUTE_DOCS_PORTS_JETBRAINS_DEVELOPMENT,
  ROUTE_DOCS_PORTS_JETBRAINS_INSTALLATION,
  ROUTE_DOCS_PORTS_JETBRAINS_SUPPORT,
  ROUTE_DOCS_PORTS_JETBRAINS_TROUBLESHOOTING,
  ROUTE_DOCS_PORTS_JETBRAINS,
  ROUTE_DOCS_PORTS_SUBLIME_TEXT_DEVELOPMENT,
  ROUTE_DOCS_PORTS_SUBLIME_TEXT_INSTALLATION,
  ROUTE_DOCS_PORTS_SUBLIME_TEXT,
  ROUTE_DOCS_PORTS_TMUX_CONFIGURATION,
  ROUTE_DOCS_PORTS_TMUX_INSTALLATION,
  ROUTE_DOCS_PORTS_TMUX_PLUGIN_SUPPORT,
  ROUTE_DOCS_PORTS_TMUX,
  ROUTE_DOCS_PORTS_VIM_CONFIGURATION,
  ROUTE_DOCS_PORTS_VIM_CUSTOMIZATION,
  ROUTE_DOCS_PORTS_VIM_INSTALLATION,
  ROUTE_DOCS_PORTS_VIM,
  ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE_CUSTOMIZATION,
  ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE_DEVELOPMENT,
  ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE_INSTALLATION,
  ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE,
  ROUTE_DOCS_SWATCHES,
  ROUTE_DOCS_USAGE,
  ROUTE_DOCS,
  ROUTE_LANDING,
  ROUTE_PORTS_ATOM_SYNTAX,
  ROUTE_PORTS_ATOM_UI,
  ROUTE_PORTS_DIRCOLORS,
  ROUTE_PORTS_EMACS,
  ROUTE_PORTS_JETBRAINS,
  ROUTE_PORTS_SUBLIME_TEXT,
  ROUTE_PORTS_TMUX,
  ROUTE_PORTS_VIM,
  ROUTE_PORTS_VISUAL_STUDIO_CODE,
  ROUTE_PORTS,
  ROUTE_ROOT,
  SECTION_COMPONENT_IDS
};
