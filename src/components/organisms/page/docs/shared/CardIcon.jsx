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
import { transparentize } from "polished";

/**
 * A component that represents the icon of a card component.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.8.0
 */
const CardIcon = ({ accentColor, iconComponent: SvgIcon, svgType = "fill", ...passProps }) => {
  const Icon = styled(SvgIcon)`
    display: inline-flex;
    width: 3em;
    height: 3em;
    border-radius: 50%;
    padding: 0.4em;
    margin: 0 auto 1em auto;
    background-color: ${transparentize(0.6, accentColor)};
    ${svgType === "stroke" ? `stroke: ${accentColor}` : `fill: ${accentColor}`};

    ${({ theme }) => theme.media.tabletPortrait`
      margin-bottom: unset;
    `};
  `;
  return <Icon {...passProps} />;
};

export default CardIcon;
