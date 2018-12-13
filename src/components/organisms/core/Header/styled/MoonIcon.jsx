/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import posed from "react-pose";

import { Moon } from "atoms/core/vectors/icons";

import { themeModeSwitchIconPoseConfig } from "./poseConfig";

const PosedMoonIcon = React.forwardRef((props, ref) => <Moon svgRef={ref} {...props} />);

/**
 * The animated "moon" icon of the theme mode switcher button with pose configurations.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
const MoonIcon = posed(PosedMoonIcon)(themeModeSwitchIconPoseConfig);

export default MoonIcon;
