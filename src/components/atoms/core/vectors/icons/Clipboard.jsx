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

import { ReactComponent as ClipboardSVGFill } from "assets/images/icons/eva-icons/clipboard-fill.svg";
import { ReactComponent as ClipboardSVGOutline } from "assets/images/icons/eva-icons/clipboard-outline.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const ClipboardIconFill = styled(ClipboardSVGFill)`
  ${themeModeFillColorStyles};
`;

const ClipboardIconOutline = styled(ClipboardSVGOutline)`
  ${themeModeFillColorStyles};
`;

/**
 * The "clipboard" icon from "Eva Icons" as styled SVG vector graphic component.
 * The "outline" variant can be used by passing the `outlined` boolean prop.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://akveo.github.io/eva-icons
 * @since 0.21.0
 */
const Clipboard = ({ className, outlined, svgRef }) =>
  outlined ? (
    <ClipboardIconOutline className={className} svgRef={svgRef} />
  ) : (
    <ClipboardIconFill className={className} svgRef={svgRef} />
  );

Clipboard.propTypes = iconPropTypes;

Clipboard.defaultProps = iconDefaultProps;

export default Clipboard;
