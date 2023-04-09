/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as PriceTagsSvgFill } from "assets/images/icons/eva-icons/pricetags-fill.svg";
import { ReactComponent as PriceTagsSvgOutline } from "assets/images/icons/eva-icons/pricetags-outline.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const PriceTagsIconFill = styled(PriceTagsSvgFill)`
  ${themeModeFillColorStyles};
`;

const PriceTagsIconOutline = styled(PriceTagsSvgOutline)`
  ${themeModeFillColorStyles};
`;

/**
 * The "pricetags" icon from "Eva Icons" as styled SVG vector graphic component.
 * The "outline" variant can be used by passing the `outlined` boolean prop.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.9.0
 * @see https://akveo.github.io/eva-icons
 */
const PriceTags = ({ className, outlined, svgRef }) =>
  outlined ? <PriceTagsIconOutline className={className} svgRef={svgRef} /> : <PriceTagsIconFill className={className} svgRef={svgRef} />;

PriceTags.propTypes = iconPropTypes;

PriceTags.defaultProps = iconDefaultProps;

export default PriceTags;
