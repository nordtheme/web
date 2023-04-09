/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as Settings2SVGFill } from "assets/images/icons/eva-icons/settings-2-fill.svg";
import { ReactComponent as Settings2SVGOutline } from "assets/images/icons/eva-icons/settings-2-outline.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const Settings2IconFill = styled(Settings2SVGFill)`
  ${themeModeFillColorStyles};
`;

const Settings2IconOutline = styled(Settings2SVGOutline)`
  ${themeModeFillColorStyles};
`;

/**
 * The "settings-2" icon from "Eva Icons" as styled SVG vector graphic component.
 * The "outline" variant can be used by passing the `outlined` boolean prop.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.13.0
 * @see https://akveo.github.io/eva-icons
 */
const Settings2 = ({ className, outlined, svgRef }) =>
  outlined ? <Settings2IconFill className={className} svgRef={svgRef} /> : <Settings2IconOutline className={className} svgRef={svgRef} />;

Settings2.propTypes = iconPropTypes;

Settings2.defaultProps = iconDefaultProps;

export default Settings2;
