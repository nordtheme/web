/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { colors, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const fontColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.font.base[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.font.base[MODE_DARK_NIGHT_FROST],
});

/**
 * The sub-container for text content.
 * The dynamic vertical layout change can be disabled by passing the `verticalOnly` boolean prop.
 * @since 0.6.0
 */
const Text = styled.div`
  color: ${fontColor};
  text-align: center;

  ${({ theme, verticalOnly }) => theme.media.tabletLandscape`
    text-align: ${!verticalOnly && "start"};
  `};
`;

export default Text;
