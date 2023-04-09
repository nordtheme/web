/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as BrushSVGFill } from "assets/images/icons/eva-icons/brush-fill.svg";
import { ReactComponent as BrushSVGOutline } from "assets/images/icons/eva-icons/brush-outline.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const BrushIconFill = styled(BrushSVGFill)`
  ${themeModeFillColorStyles};
`;

const BrushIconOutline = styled(BrushSVGOutline)`
  ${themeModeFillColorStyles};
`;

/**
 * The "brush" icon from "Eva Icons" as styled SVG vector graphic component.
 * The "outline" variant can be used by passing the `outlined` boolean prop.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.13.0
 * @see https://akveo.github.io/eva-icons
 */
const Brush = ({ className, outlined, svgRef }) =>
  outlined ? <BrushIconFill className={className} svgRef={svgRef} /> : <BrushIconOutline className={className} svgRef={svgRef} />;

Brush.propTypes = iconPropTypes;

Brush.defaultProps = iconDefaultProps;

export default Brush;
