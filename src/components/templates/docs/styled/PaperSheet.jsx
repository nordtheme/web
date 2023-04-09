/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";
import { rgba } from "polished";

import { colors, media, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";
import { baseBackgroundColor } from "containers/core/shared/styles";

const dropShadowColorAmbientLight = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.shadow.base[MODE_BRIGHT_SNOW_FLURRY], 0.1),
  [MODE_DARK_NIGHT_FROST]: rgba(colors.shadow.base[MODE_DARK_NIGHT_FROST], 0.1),
});

const dropShadowColorDirectLight = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.shadow.base[MODE_BRIGHT_SNOW_FLURRY], 0.25),
  [MODE_DARK_NIGHT_FROST]: rgba(colors.shadow.base[MODE_DARK_NIGHT_FROST], 0.25),
});

/**
 * A styled paper sheet component.
 * @since 0.10.0
 */
const PaperSheet = styled.div`
  background-color: ${baseBackgroundColor};
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  padding: 0 1em;
  border-radius: 8px;
  box-shadow: 0 4px 6px ${dropShadowColorDirectLight}, 0 5px 7px ${dropShadowColorAmbientLight};
  transition: box-shadow ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out,
    background-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;

  ${media.phoneLandscape`
    max-width: 95%;
    padding: 2em 4em;
  `};
`;

export default PaperSheet;
