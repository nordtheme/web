/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import posed from "react-pose";

import { Sun } from "atoms/core/vectors/icons";

import { themeModeSwitchIconPoseConfig } from "./poseConfig";

const PosedSunIcon = React.forwardRef((props, ref) => <Sun svgRef={ref} {...props} />);

/**
 * The animated "sun" icon of the theme mode switcher button with pose configurations.
 * @since 0.3.0
 */
const SunIcon = posed(PosedSunIcon)(themeModeSwitchIconPoseConfig);

export default SunIcon;
