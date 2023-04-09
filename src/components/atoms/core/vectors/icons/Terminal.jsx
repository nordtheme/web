/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as TerminalSVG } from "assets/images/icons/feathericons/terminal.svg";

import { iconDefaultProps, iconPropTypes, themeModeStrokeColorStyles } from "../shared";

const TerminalIcon = styled(TerminalSVG)`
  ${themeModeStrokeColorStyles};
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

/**
 * The "terminal" icon from "Feather Icons" as styled SVG vector graphic component.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.8.0
 * @see https://feathericons.com
 */
const Terminal = ({ className, svgRef }) => <TerminalIcon className={className} svgRef={svgRef} />;

Terminal.propTypes = iconPropTypes;

Terminal.defaultProps = iconDefaultProps;

export default Terminal;
