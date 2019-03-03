/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";
import posed from "react-pose";
import { rgba } from "polished";

import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

import { componentBaseBackgroundColor } from "../shared/styles";

const dropShadowColorAmbientLight = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.shadow.base[MODE_BRIGHT_SNOW_FLURRY], 0.1),
  [MODE_DARK_NIGHT_FROST]: rgba(colors.shadow.base[MODE_DARK_NIGHT_FROST], 0.1)
});

const dropShadowColorDirectLight = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.shadow.base[MODE_BRIGHT_SNOW_FLURRY], 0.25),
  [MODE_DARK_NIGHT_FROST]: rgba(colors.shadow.base[MODE_DARK_NIGHT_FROST], 0.25)
});

/**
 * The card component to represent a port project and its metadata.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const Card = styled(posed.div())`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  height: auto;
  border-radius: 4px;
  background-color: ${componentBaseBackgroundColor};
  box-shadow: 0 4px 6px ${dropShadowColorDirectLight}, 0 5px 7px ${dropShadowColorAmbientLight};
  transition: box-shadow ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out,
    background-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;

  &:hover {
    box-shadow: 0 8px 10px ${dropShadowColorDirectLight}, 0 9px 11px ${dropShadowColorAmbientLight};
  }
`;

export default Card;
