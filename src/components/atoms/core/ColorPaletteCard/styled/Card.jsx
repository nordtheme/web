/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

import { dropShadowColor } from "../shared/styles";

const backgroundColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.background.base[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.background.base[MODE_DARK_NIGHT_FROST]
});

/**
 * The main container of the color palette card.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.6.0
 */
const Card = styled.div`
  display: flex;
  background-color: ${backgroundColor};
  flex-direction: column;
  box-shadow: 0px 3px 6px 0px ${dropShadowColor};
  border-radius: 0.5em;
  transition: box-shadow ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out,
    background-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 10px 20px 2px ${dropShadowColor};
  }
`;

export default Card;
