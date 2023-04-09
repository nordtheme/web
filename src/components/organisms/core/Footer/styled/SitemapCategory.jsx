/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const borderBottomColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord4,
  [MODE_DARK_NIGHT_FROST]: colors.nord3,
});

/**
 * A container for a sitemap category.
 * @since 0.5.0
 */
const SitemapCategory = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${borderBottomColor};
  transition: border-bottom ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
  margin-bottom: 1em;
  width: 70%;
  user-select: none;

  ${({ theme }) => theme.media.tabletPortrait`
    width: unset;
  `};

  ${({ theme }) => theme.media.tabletLandscape`
    justify-content: unset;
  `};
`;

export default SitemapCategory;
