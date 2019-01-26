/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";
import { rgba } from "polished";

import { colors, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const backgroundColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.background.base[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.background.base[MODE_DARK_NIGHT_FROST]
});

const dropShadowColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.shadow.base[MODE_BRIGHT_SNOW_FLURRY], 0.35),
  [MODE_DARK_NIGHT_FROST]: rgba(colors.shadow.base[MODE_DARK_NIGHT_FROST], 0.35)
});

/**
 * A styled base card component.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.7.0
 */
const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: auto;
  border-radius: 8px;
  padding: 2em;
  box-shadow: 0px 6px 9px 0px ${dropShadowColor};
  background-color: ${backgroundColor};
  transition: box-shadow 0.4s ease-in-out, background-color 0.4s ease-in-out;
`;

export default BaseCard;
