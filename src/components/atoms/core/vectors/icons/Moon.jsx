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
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://akveo.github.io/eva-icons
 * @since 0.3.0
 */
const Moon = ({ className, outlined, svgRef }) =>
  outlined ? (
    <MoonIconOutline className={className} svgRef={svgRef} />
  ) : (
    <MoonIconFill className={className} svgRef={svgRef} />
  );

Moon.propTypes = iconPropTypes;

Moon.defaultProps = iconDefaultProps;

export default Moon;
