/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import posed from "react-pose";

import NavLink from "./NavLink";
import { slideMenuNavigationLinkPoseConfig } from "./poseConfig";

const Link = React.forwardRef((props, ref) => <NavLink ref={ref} {...props} />);

/**
 * An animated slide menu navigation link.
 * @since 0.3.0
 */
const SlideMenuNavLink = posed(Link)(slideMenuNavigationLinkPoseConfig);

export default SlideMenuNavLink;
