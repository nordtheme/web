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

import { ReactComponent as GitHubSVG } from "assets/images/icons/simple-icons/github.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const GitHubIcon = styled(GitHubSVG)`
  ${themeModeFillColorStyles};
`;

/**
 * The "GitHub" logo icon from the "Simple Icons" project as styled SVG vector graphic component.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://simpleicons.org
 * @since 0.5.0
 */
const GitHub = ({ className, svgRef }) => <GitHubIcon className={className} svgRef={svgRef} />;

GitHub.propTypes = iconPropTypes;

GitHub.defaultProps = iconDefaultProps;

export default GitHub;
