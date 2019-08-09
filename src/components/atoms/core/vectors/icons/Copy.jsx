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

import { ReactComponent as CopySVGFill } from "assets/images/icons/eva-icons/copy-fill.svg";
import { ReactComponent as CopySVGOutline } from "assets/images/icons/eva-icons/copy-outline.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const CopyIconFill = styled(CopySVGFill)`
  ${themeModeFillColorStyles};
`;

const CopyIconOutline = styled(CopySVGOutline)`
  ${themeModeFillColorStyles};
`;

/**
 * The "copy" icon from "Eva Icons" as styled SVG vector graphic component.
 * The "outline" variant can be used by passing the `outlined` boolean prop.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://akveo.github.io/eva-icons
 * @since 0.21.0
 */
const Copy = ({ className, outlined, svgRef }) =>
  outlined ? (
    <CopyIconOutline className={className} svgRef={svgRef} />
  ) : (
    <CopyIconFill className={className} svgRef={svgRef} />
  );

Copy.propTypes = iconPropTypes;

Copy.defaultProps = iconDefaultProps;

export default Copy;
