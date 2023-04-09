/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { A } from "atoms/core/html-elements";
import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const fontColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.font.faded[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.font.faded[MODE_DARK_NIGHT_FROST],
});

const fontColorHover = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.font.base[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.font.base[MODE_DARK_NIGHT_FROST],
});

/**
 * A link for a sitemap page link.
 * @since 0.5.0
 */
const SitemapLink = styled(A)`
  display: block;
  padding: 0.4em 0;
  font-size: 0.9em;
  color: ${fontColor};
  transition: color ${motion.speed.duration.transition.text.fade}ms ease-in-out;

  &:active,
  &:focus,
  &:hover {
    color: ${fontColorHover};
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

export default SitemapLink;
