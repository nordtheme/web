/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Landscape
 * Repository: https://github.com/arcticicestudio/arctic-landscape
 * License:    MIT
 */

/**
 * @file Provides pose configurations.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.7.0
 * @see https://popmotion.io/pose/api/react-config
 */

const transitionSpringConfig = {
  type: "spring",
  stiffness: 250,
  damping: 12,
  velocity: 2
};

const poses = {
  enter: "enter",
  leave: "leave"
};

const svgPoseConfig = {
  [poses.enter]: {
    staggerChildren: 750
  }
};

const bounceInGroupPoseConfig = {
  [poses.enter]: {
    opacity: 1,
    scale: 1,
    delay: 400,
    transition: {
      scale: transitionSpringConfig
    }
  },
  [poses.leave]: {
    scale: 0,
    opacity: 0
  }
};

export { bounceInGroupPoseConfig, poses, svgPoseConfig };
