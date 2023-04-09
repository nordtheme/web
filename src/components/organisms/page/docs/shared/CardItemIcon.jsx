/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import { cardIconPropTypes } from "./propTypes";

/**
 * A component that represents the icon of a card item.
 * @since 0.8.0
 */
const CardItemIcon = ({ accentColor, iconComponent: SvgIcon, iconOutlined, svgType, ...passProps }) => {
  const Icon = styled(SvgIcon)`
    width: 1.8em;
    ${svgType === "stroke" ? `stroke: ${accentColor}` : `fill: ${accentColor}`};

    ${({ theme }) => theme.media.tabletPortrait`
      margin-right: 1em;
    `};
  `;
  return <Icon outlined={iconOutlined} {...passProps} />;
};

CardItemIcon.propTypes = cardIconPropTypes;

export default CardItemIcon;
