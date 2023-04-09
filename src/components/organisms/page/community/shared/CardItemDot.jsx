/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";
import { readableColor } from "polished";

import { themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const colorThemed = (color) =>
  themedMode({
    [MODE_BRIGHT_SNOW_FLURRY]: readableColor(color),
    [MODE_DARK_NIGHT_FROST]: readableColor(color),
  });

/**
 * A component that represents a dot of an card item.
 * @since 0.7.0
 */
const CardItemDot = styled.div`
  display: none;

  ${({ theme }) => theme.media.tabletPortrait`
    width: 1.8em;
    height: 1.8em;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    flex-shrink: 0;
    margin-right: 1em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    color: ${({ color }) => colorThemed(color)};
  `};
`;

export default CardItemDot;
