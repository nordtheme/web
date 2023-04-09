/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as MoonSVGFill } from "assets/images/icons/eva-icons/moon-fill.svg";
import { ReactComponent as MoonSVGOutline } from "assets/images/icons/eva-icons/moon-outline.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const MoonIconFill = styled(MoonSVGFill)`
  ${themeModeFillColorStyles};
`;

const MoonIconOutline = styled(MoonSVGOutline)`
  ${themeModeFillColorStyles};
`;

/**
 * The "moon" icon from "Eva Icons" as styled SVG vector graphic component.
 * The "outline" variant can be used by passing the `outlined` boolean prop.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.3.0
 * @see https://akveo.github.io/eva-icons
 */
const Moon = ({ className, outlined, svgRef }) =>
  outlined ? <MoonIconOutline className={className} svgRef={svgRef} /> : <MoonIconFill className={className} svgRef={svgRef} />;

Moon.propTypes = iconPropTypes;

Moon.defaultProps = iconDefaultProps;

export default Moon;
