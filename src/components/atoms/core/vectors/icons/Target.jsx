/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as TargetSVG } from "assets/images/icons/feathericons/target.svg";

import { iconDefaultProps, iconPropTypes, themeModeStrokeColorStyles } from "../shared";

const TargetIcon = styled(TargetSVG)`
  ${themeModeStrokeColorStyles};
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

/**
 * The "target" icon from "Feather Icons" as styled SVG vector graphic component.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.12.0
 * @see https://feathericons.com
 */
const Target = ({ className, svgRef }) => <TargetIcon className={className} svgRef={svgRef} />;

Target.propTypes = iconPropTypes;

Target.defaultProps = iconDefaultProps;

export default Target;
