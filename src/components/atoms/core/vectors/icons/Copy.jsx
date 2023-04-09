/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as CopySVGFill } from "assets/images/icons/eva-icons/copy-fill.svg";
import { ReactComponent as CopySVGOutline } from "assets/images/icons/eva-icons/copy-outline.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const CopyIconFill = styled(CopySVGFill)`
  ${themeModeFillColorStyles};
`;

const CopyIconOutline = styled(CopySVGOutline)`
  ${themeModeFillColorStyles};
`;

/**
 * The "copy" icon from "Eva Icons" as styled SVG vector graphic component.
 * The "outline" variant can be used by passing the `outlined` boolean prop.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.21.0
 * @see https://akveo.github.io/eva-icons
 */
const Copy = ({ className, outlined, svgRef }) =>
  outlined ? <CopyIconOutline className={className} svgRef={svgRef} /> : <CopyIconFill className={className} svgRef={svgRef} />;

Copy.propTypes = iconPropTypes;

Copy.defaultProps = iconDefaultProps;

export default Copy;
