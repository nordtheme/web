/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as CloudDownloadSvgFill } from "assets/images/icons/eva-icons/cloud-download-fill.svg";
import { ReactComponent as CloudDownloadSvgOutline } from "assets/images/icons/eva-icons/cloud-download-outline.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const CloudDownloadIconFill = styled(CloudDownloadSvgFill)`
  ${themeModeFillColorStyles};
`;

const CloudDownloadIconOutline = styled(CloudDownloadSvgOutline)`
  ${themeModeFillColorStyles};
`;

/**
 * The "cloud download" icon from "Eva Icons" as styled SVG vector graphic component.
 * The "outline" variant can be used by passing the `outlined` boolean prop.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.9.0
 * @see https://akveo.github.io/eva-icons
 */
const CloudDownload = ({ className, outlined, svgRef }) =>
  outlined ? <CloudDownloadIconOutline className={className} svgRef={svgRef} /> : <CloudDownloadIconFill className={className} svgRef={svgRef} />;

CloudDownload.propTypes = iconPropTypes;

CloudDownload.defaultProps = iconDefaultProps;

export default CloudDownload;
