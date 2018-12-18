/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
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
 * The "sun" icon from "Eva Icons" as SVG vector graphic component.
 * The "outline" variant can be used by passing the `outlined` boolean prop.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://akveo.github.io/eva-icons
 * @since 0.3.0
 */
const Sun = ({ outlined, svgRef }) => (outlined ? <SunIconOutline svgRef={svgRef} /> : <SunIconFill svgRef={svgRef} />);

Sun.propTypes = iconPropTypes;

Sun.defaultProps = iconDefaultProps;

export default Sun;
