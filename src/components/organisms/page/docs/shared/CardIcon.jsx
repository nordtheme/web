/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";

import { cardIconPropTypes } from "./propTypes";

/**
 * A component that represents the icon of a card component.
 * @since 0.8.0
 */
const CardIcon = ({ accentColor, iconComponent: SvgIcon, svgType, ...passProps }) => {
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

CardIcon.propTypes = cardIconPropTypes;

export default CardIcon;
