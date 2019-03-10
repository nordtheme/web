/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { A } from "atoms/core/html-elements";
import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const fontColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.font.faded[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.font.faded[MODE_DARK_NIGHT_FROST]
});

const fontColorHover = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.font.base[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.font.base[MODE_DARK_NIGHT_FROST]
});

/**
 * A link for a sitemap page link.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
