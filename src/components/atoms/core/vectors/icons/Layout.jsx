/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as LayoutSVGFill } from "assets/images/icons/eva-icons/layout-fill.svg";
import { ReactComponent as LayoutSVGOutline } from "assets/images/icons/eva-icons/layout-outline.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const LayoutIconFill = styled(LayoutSVGFill)`
  ${themeModeFillColorStyles};
`;

const LayoutIconOutline = styled(LayoutSVGOutline)`
  ${themeModeFillColorStyles};
`;

/**
 * The "layout" icon from "Eva Icons" as styled SVG vector graphic component.
 * The "outline" variant can be used by passing the `outlined` boolean prop.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.8.0
 * @see https://akveo.github.io/eva-icons
 */
const Layout = ({ className, outlined, svgRef }) =>
  outlined ? <LayoutIconFill className={className} svgRef={svgRef} /> : <LayoutIconOutline className={className} svgRef={svgRef} />;

Layout.propTypes = iconPropTypes;

Layout.defaultProps = iconDefaultProps;

export default Layout;
