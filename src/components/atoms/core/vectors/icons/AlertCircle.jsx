/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as AlertCircleSVGFill } from "assets/images/icons/eva-icons/alert-circle-fill.svg";
import { ReactComponent as AlertCircleSVGOutline } from "assets/images/icons/eva-icons/alert-circle-outline.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const AlertCircleIconFill = styled(AlertCircleSVGFill)`
  ${themeModeFillColorStyles};
`;

const AlertCircleIconOutline = styled(AlertCircleSVGOutline)`
  ${themeModeFillColorStyles};
`;

/**
 * The "alert circle" icon from "Eva Icons" as styled SVG vector graphic component.
 * The "outline" variant can be used by passing the `outlined` boolean prop.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.12.0
 * @see https://akveo.github.io/eva-icons
 */
const AlertCircle = ({ className, outlined, svgRef }) =>
  outlined ? <AlertCircleIconFill className={className} svgRef={svgRef} /> : <AlertCircleIconOutline className={className} svgRef={svgRef} />;

AlertCircle.propTypes = iconPropTypes;

AlertCircle.defaultProps = iconDefaultProps;

export default AlertCircle;
