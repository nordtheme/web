/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

const transitionSpringConfig = {
  type: "spring",
  stiffness: 250,
  damping: 12,
  velocity: 2,
};

const poses = {
  enter: "enter",
  leave: "leave",
};

const svgPoseConfig = {
  [poses.enter]: {
    staggerChildren: 750,
  },
};

const bounceInGroupPoseConfig = {
  [poses.enter]: {
    opacity: 1,
    scale: 1,
    delay: 400,
    transition: {
      scale: transitionSpringConfig,
    },
  },
  [poses.leave]: {
    scale: 0,
    opacity: 0,
  },
};

/**
 * Provides pose configurations.
 * @since 0.7.0
 * @see https://popmotion.io/pose/api/react-config
 */
export { bounceInGroupPoseConfig, poses, svgPoseConfig };
