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

import { ReactComponent as CompassSVGFill } from "assets/images/icons/eva-icons/compass-fill.svg";
import { ReactComponent as CompassSVGOutline } from "assets/images/icons/eva-icons/compass-outline.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const CompassIconFill = styled(CompassSVGFill)`
  ${themeModeFillColorStyles};
`;

const CompassIconOutline = styled(CompassSVGOutline)`
  ${themeModeFillColorStyles};
`;

/**
 * The "compass" icon from "Eva Icons" as styled SVG vector graphic component.
 * The "outline" variant can be used by passing the `outlined` boolean prop.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.8.0
 * @see https://akveo.github.io/eva-icons
 */
const Compass = ({ className, outlined, svgRef }) =>
  outlined ? (
    <CompassIconFill className={className} svgRef={svgRef} />
  ) : (
    <CompassIconOutline className={className} svgRef={svgRef} />
  );

Compass.propTypes = iconPropTypes;

Compass.defaultProps = iconDefaultProps;

export default Compass;
