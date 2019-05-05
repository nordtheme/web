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
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.12.0
 * @see https://akveo.github.io/eva-icons
 */
const AlertCircle = ({ className, outlined, svgRef }) =>
  outlined ? (
    <AlertCircleIconFill className={className} svgRef={svgRef} />
  ) : (
    <AlertCircleIconOutline className={className} svgRef={svgRef} />
  );

AlertCircle.propTypes = iconPropTypes;

AlertCircle.defaultProps = iconDefaultProps;

export default AlertCircle;
