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

import { ReactComponent as BulbSVGFill } from "assets/images/icons/eva-icons/bulb-fill.svg";
import { ReactComponent as BulbSVGOutline } from "assets/images/icons/eva-icons/bulb-outline.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const BulbIconFill = styled(BulbSVGFill)`
  ${themeModeFillColorStyles};
`;

const BulbIconOutline = styled(BulbSVGOutline)`
  ${themeModeFillColorStyles};
`;

/**
 * The "bulb" icon from "Eva Icons" as styled SVG vector graphic component.
 * The "outline" variant can be used by passing the `outlined` boolean prop.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.12.0
 * @see https://akveo.github.io/eva-icons
 */
const Bulb = ({ className, outlined, svgRef }) =>
  outlined ? (
    <BulbIconFill className={className} svgRef={svgRef} />
  ) : (
    <BulbIconOutline className={className} svgRef={svgRef} />
  );

Bulb.propTypes = iconPropTypes;

Bulb.defaultProps = iconDefaultProps;

export default Bulb;
