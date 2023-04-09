/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import posed from "react-pose";

import { Moon } from "atoms/core/vectors/icons";

import { themeModeSwitchIconPoseConfig } from "./poseConfig";

const PosedMoonIcon = React.forwardRef((props, ref) => <Moon svgRef={ref} {...props} />);

/**
 * The animated "moon" icon of the theme mode switcher button with pose configurations.
 * @since 0.3.0
 */
const MoonIcon = posed(PosedMoonIcon)(themeModeSwitchIconPoseConfig);

export default MoonIcon;
