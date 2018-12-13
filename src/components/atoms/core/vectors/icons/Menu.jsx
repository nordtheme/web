/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as MenuSVGOutline } from "assets/images/icons/eva-icons/menu-outline.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const MenuIconOutline = styled(MenuSVGOutline)`
  ${themeModeFillColorStyles};
`;

/**
 * The "menu" icon from "Eva Icons" as SVG vector graphic component.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://akveo.github.io/eva-icons
 * @since 0.3.0
 */
const Menu = ({ svgRef }) => <MenuIconOutline svgRef={svgRef} />;

Menu.propTypes = iconPropTypes;

Menu.defaultProps = iconDefaultProps;

export default Menu;
