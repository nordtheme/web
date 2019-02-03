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

import { ReactComponent as CodeSVG } from "assets/images/icons/eva-icons/code.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const CodeIcon = styled(CodeSVG)`
  ${themeModeFillColorStyles};
`;

/**
 * The "code" icon from "Eva Icons" as styled SVG vector graphic component.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.8.0
 * @see https://akveo.github.io/eva-icons
 */
const Code = ({ className, svgRef }) => <CodeIcon className={className} svgRef={svgRef} />;

Code.propTypes = iconPropTypes;

Code.defaultProps = iconDefaultProps;

export default Code;
