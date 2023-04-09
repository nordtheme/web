/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as GitHubSVG } from "assets/images/icons/simple-icons/github.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const GitHubIcon = styled(GitHubSVG)`
  ${themeModeFillColorStyles};
`;

/**
 * The "GitHub" logo icon from the "Simple Icons" project as styled SVG vector graphic component.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.5.0
 * @see https://simpleicons.org
 */
const GitHub = ({ className, svgRef }) => <GitHubIcon className={className} svgRef={svgRef} />;

GitHub.propTypes = iconPropTypes;

GitHub.defaultProps = iconDefaultProps;

export default GitHub;
