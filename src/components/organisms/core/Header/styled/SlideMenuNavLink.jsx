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

import NavLink from "./NavLink";
import { slideMenuNavigationLinkPoseConfig } from "./poseConfig";

const Link = React.forwardRef((props, ref) => <NavLink ref={ref} {...props} />);

/**
 * An animated slide menu navigation link.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
const SlideMenuNavLink = posed(Link)(slideMenuNavigationLinkPoseConfig);

export default SlideMenuNavLink;
