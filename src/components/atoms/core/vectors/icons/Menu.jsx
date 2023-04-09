/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as MenuSVGOutline } from "assets/images/icons/eva-icons/menu-outline.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const MenuIconOutline = styled(MenuSVGOutline)`
  ${themeModeFillColorStyles};
`;

/**
 * The "menu" icon from "Eva Icons" as styled SVG vector graphic component.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.3.0
 * @see https://akveo.github.io/eva-icons
 */
const Menu = ({ className, svgRef }) => <MenuIconOutline className={className} svgRef={svgRef} />;

Menu.propTypes = iconPropTypes;

Menu.defaultProps = iconDefaultProps;

export default Menu;
