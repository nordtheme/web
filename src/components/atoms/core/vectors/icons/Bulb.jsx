/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as BulbSVGFill } from "assets/images/icons/eva-icons/bulb-fill.svg";
import { ReactComponent as BulbSVGOutline } from "assets/images/icons/eva-icons/bulb-outline.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const BulbIconFill = styled(BulbSVGFill)`
  ${themeModeFillColorStyles};
`;

const BulbIconOutline = styled(BulbSVGOutline)`
  ${themeModeFillColorStyles};
`;

/**
 * The "bulb" icon from "Eva Icons" as styled SVG vector graphic component.
 * The "outline" variant can be used by passing the `outlined` boolean prop.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.12.0
 * @see https://akveo.github.io/eva-icons
 */
const Bulb = ({ className, outlined, svgRef }) =>
  outlined ? <BulbIconFill className={className} svgRef={svgRef} /> : <BulbIconOutline className={className} svgRef={svgRef} />;

Bulb.propTypes = iconPropTypes;

Bulb.defaultProps = iconDefaultProps;

export default Bulb;
