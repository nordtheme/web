/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as ArrowForwardSVGFill } from "assets/images/icons/eva-icons/arrow-forward-fill.svg";
import { ReactComponent as ArrowForwardSVGOutline } from "assets/images/icons/eva-icons/arrow-forward-outline.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const ArrowForwardIconFill = styled(ArrowForwardSVGFill)`
  ${themeModeFillColorStyles};
`;

const ArrowForwardIconOutline = styled(ArrowForwardSVGOutline)`
  ${themeModeFillColorStyles};
`;

/**
 * The "arrow forward" icon from "Eva Icons" as styled SVG vector graphic component.
 * The "outline" variant can be used by passing the `outlined` boolean prop.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.8.0
 * @see https://akveo.github.io/eva-icons
 */
const ArrowForward = ({ className, outlined, svgRef }) =>
  outlined ? <ArrowForwardIconFill className={className} svgRef={svgRef} /> : <ArrowForwardIconOutline className={className} svgRef={svgRef} />;

ArrowForward.propTypes = iconPropTypes;

ArrowForward.defaultProps = iconDefaultProps;

export default ArrowForward;
