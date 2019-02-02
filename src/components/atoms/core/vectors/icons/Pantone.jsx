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

import { ReactComponent as PantoneSVGFill } from "assets/images/icons/eva-icons/pantone-fill.svg";
import { ReactComponent as PantoneSVGOutline } from "assets/images/icons/eva-icons/pantone-outline.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const PantoneIconFill = styled(PantoneSVGFill)`
  ${themeModeFillColorStyles};
`;

const PantoneIconOutline = styled(PantoneSVGOutline)`
  ${themeModeFillColorStyles};
`;

/**
 * The "pantone" icon from "Eva Icons" as styled SVG vector graphic component.
 * The "outline" variant can be used by passing the `outlined` boolean prop.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.8.0
 * @see https://akveo.github.io/eva-icons
 */
const Pantone = ({ className, outlined, svgRef }) =>
  outlined ? (
    <PantoneIconFill className={className} svgRef={svgRef} />
  ) : (
    <PantoneIconOutline className={className} svgRef={svgRef} />
  );

Pantone.propTypes = iconPropTypes;

Pantone.defaultProps = iconDefaultProps;

export default Pantone;
