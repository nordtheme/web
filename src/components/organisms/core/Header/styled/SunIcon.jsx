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

import { Sun } from "atoms/core/vectors/icons";

import { themeModeSwitchIconPoseConfig } from "./poseConfig";

const PosedSunIcon = React.forwardRef((props, ref) => <Sun svgRef={ref} {...props} />);

/**
 * The animated "sun" icon of the theme mode switcher button with pose configurations.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
const SunIcon = posed(PosedSunIcon)(themeModeSwitchIconPoseConfig);

export default SunIcon;
