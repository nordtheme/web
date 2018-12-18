/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides pose animation configuerations.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */

import { em } from "polished";

import { motion } from "styles/theme";

import { HEADER_HEIGHT, HEADER_HEIGHT_PINNED } from "../shared/styles";

/**
 * The initial pose to apply the "reverse" enter and exit animation.
 *
 * @type {string}
 */
const THEME_MODE_SWITCH_ICON_INITIAL_POSE = "reverseInOut";

/**
 * The initial pose to apply the slide in animation for slide menu navigation links.
 *
 * @type {string}
 */
const SLIDE_MENU_NAV_LINK_CLOSED_POSE = "closed";

/**
 * The initial pose to apply the slide in animation for slide menu navigation links.
 *
 * @type {string}
 */
const SLIDE_MENU_NAV_LINK_INITIAL_POSE = "slideIn";

/**
 * The initial pose to apply the slide in animation for slide menu navigation links.
 *
 * @type {string}
 */
const SLIDE_MENU_NAV_LINK_OPEN_POSE = "open";

/**
 * The pose animation configurations for the slide menu navigation links.
 *
 * @type {Object}
 */
const slideMenuNavigationLinkPoseConfig = {
  [SLIDE_MENU_NAV_LINK_INITIAL_POSE]: {
    opacity: 0,
    y: "calc(-5vh)"
  },
  [SLIDE_MENU_NAV_LINK_CLOSED_POSE]: {
    opacity: 0,
    y: "calc(-5vh)",
    transition: {
      duration: motion.speed.duration.transition.text.fade * motion.speed.duration.exitReducerFactor
    }
  },
  [SLIDE_MENU_NAV_LINK_OPEN_POSE]: {
    opacity: 1,
    y: 0,
    transition: { duration: motion.speed.duration.transition.text.fade }
  }
};

/**
 * The pose animation configurations for the slide menu navigation links.
 *
 * @type {Object}
 */
const slideMenuNavigationPoseConfig = {
  [SLIDE_MENU_NAV_LINK_CLOSED_POSE]: {
    height: 0,
    staggerChildren: (motion.speed.duration.transition.area.large * 0.333) / 2,
    delay: (motion.speed.duration.transition.area.large * 0.333) / 2,
    transition: {
      duration: motion.speed.duration.transition.area.large * motion.speed.duration.exitReducerFactor
    }
  },
  [SLIDE_MENU_NAV_LINK_OPEN_POSE]: {
    height: ({ isPinned }) => `calc(100vh - ${isPinned ? em(HEADER_HEIGHT_PINNED) : em(HEADER_HEIGHT)})`,
    delayChildren: motion.speed.duration.transition.area.large * 0.333,
    staggerChildren: (motion.speed.duration.transition.area.large * 0.333) / 2,
    transition: {
      duration: motion.speed.duration.transition.area.large
    }
  }
};

/**
 * The pose animation configurations for the icons of the button component that toggles between the global theme modes.
 *
 * @type {Object}
 */
const themeModeSwitchIconPoseConfig = {
  [THEME_MODE_SWITCH_ICON_INITIAL_POSE]: {
    y: ({ reverseEnterDirection }) => (reverseEnterDirection ? 32 : -32)
  },
  enter: {
    y: 0,
    delay: motion.speed.duration.transition.base.themeModeSwitch / 2,
    transition: { duration: motion.speed.duration.transition.base.themeModeSwitch }
  },
  exit: {
    y: ({ reverseEnterDirection }) => (reverseEnterDirection ? -32 : 32),
    transition: { duration: motion.speed.duration.transition.base.themeModeSwitch }
  }
};

export {
  slideMenuNavigationLinkPoseConfig,
  slideMenuNavigationPoseConfig,
  themeModeSwitchIconPoseConfig,
  SLIDE_MENU_NAV_LINK_CLOSED_POSE,
  SLIDE_MENU_NAV_LINK_INITIAL_POSE,
  SLIDE_MENU_NAV_LINK_OPEN_POSE,
  THEME_MODE_SWITCH_ICON_INITIAL_POSE
};
