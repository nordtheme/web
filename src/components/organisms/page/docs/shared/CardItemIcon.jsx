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

import { cardIconPropTypes } from "./propTypes";

/**
 * A component that represents the icon of a card item.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
