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

import { ReactComponent as CodeDownloadSVG } from "assets/images/icons/eva-icons/code-download.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const CodeDownloadIcon = styled(CodeDownloadSVG)`
  ${themeModeFillColorStyles};
`;

/**
 * The "code download" icon from "Eva Icons" as styled SVG vector graphic component.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.8.0
 * @see https://akveo.github.io/eva-icons
 */
const CodeDownload = ({ className, svgRef }) => <CodeDownloadIcon className={className} svgRef={svgRef} />;

CodeDownload.propTypes = iconPropTypes;

CodeDownload.defaultProps = iconDefaultProps;

export default CodeDownload;
