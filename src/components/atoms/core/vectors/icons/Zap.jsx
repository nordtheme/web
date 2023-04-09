/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as ZapSVG } from "assets/images/icons/feathericons/zap.svg";

import { iconDefaultProps, iconPropTypes, themeModeStrokeColorStyles } from "../shared";

const ZapIcon = styled(ZapSVG)`
  ${themeModeStrokeColorStyles};
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

/**
 * The "zap" icon from "Feather Icons" as styled SVG vector graphic component.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.8.0
 * @see https://feathericons.com
 */
const Zap = ({ className, svgRef }) => <ZapIcon className={className} svgRef={svgRef} />;

Zap.propTypes = iconPropTypes;

Zap.defaultProps = iconDefaultProps;

export default Zap;
