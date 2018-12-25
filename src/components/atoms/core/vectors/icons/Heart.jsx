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
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://akveo.github.io/eva-icons
 * @since 0.5.0
 */
const Heart = ({ className, outlined, svgRef }) =>
  outlined ? (
    <HeartIconOutline className={className} svgRef={svgRef} />
  ) : (
    <HeartIconFill className={className} svgRef={svgRef} />
  );

Heart.propTypes = iconPropTypes;

Heart.defaultProps = iconDefaultProps;

export default Heart;
