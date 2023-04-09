/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as HeartSVGFill } from "assets/images/icons/eva-icons/heart-fill.svg";
import { ReactComponent as HeartSVGOutline } from "assets/images/icons/eva-icons/heart-outline.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const HeartIconFill = styled(HeartSVGFill)`
  ${themeModeFillColorStyles};
`;

const HeartIconOutline = styled(HeartSVGOutline)`
  ${themeModeFillColorStyles};
`;

/**
 * The "heart" icon from "Eva Icons" as styled SVG vector graphic component.
 * The "outline" variant can be used by passing the `outlined` boolean prop.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.5.0
 * @see https://akveo.github.io/eva-icons
 */
const Heart = ({ className, outlined, svgRef }) =>
  outlined ? <HeartIconOutline className={className} svgRef={svgRef} /> : <HeartIconFill className={className} svgRef={svgRef} />;

Heart.propTypes = iconPropTypes;

Heart.defaultProps = iconDefaultProps;

export default Heart;
