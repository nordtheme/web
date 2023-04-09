/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as SunSVGFill } from "assets/images/icons/eva-icons/sun-fill.svg";
import { ReactComponent as SunSVGOutline } from "assets/images/icons/eva-icons/sun-outline.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const SunIconFill = styled(SunSVGFill)`
  ${themeModeFillColorStyles};
`;

const SunIconOutline = styled(SunSVGOutline)`
  ${themeModeFillColorStyles};
`;

/**
 * The "sun" icon from "Eva Icons" as styled SVG vector graphic component.
 * The "outline" variant can be used by passing the `outlined` boolean prop.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.3.0
 * @see https://akveo.github.io/eva-icons
 */
const Sun = ({ className, outlined, svgRef }) =>
  outlined ? <SunIconOutline className={className} svgRef={svgRef} /> : <SunIconFill className={className} svgRef={svgRef} />;

Sun.propTypes = iconPropTypes;

Sun.defaultProps = iconDefaultProps;

export default Sun;
