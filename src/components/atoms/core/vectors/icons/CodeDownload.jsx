/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
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
 * @since 0.8.0
 * @see https://akveo.github.io/eva-icons
 */
const CodeDownload = ({ className, svgRef }) => <CodeDownloadIcon className={className} svgRef={svgRef} />;

CodeDownload.propTypes = iconPropTypes;

CodeDownload.defaultProps = iconDefaultProps;

export default CodeDownload;
