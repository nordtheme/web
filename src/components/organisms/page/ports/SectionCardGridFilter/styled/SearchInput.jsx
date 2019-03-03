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

import { componentBaseBackgroundColor, decentDecorationColor, fadedFontColor } from "../shared/styles";

const fontColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.font.base[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.font.base[MODE_DARK_NIGHT_FROST]
});

/**
 * The search/filter input component of the port project grid.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const SearchInput = styled.input`
  font-family: ${({ theme }) => theme.typography.typefaces.straight};
  display: block;
  width: 100%;
  outline: none;
  cursor: default;
  color: ${fontColor};
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: ${componentBaseBackgroundColor};
  padding: 0.5em 1em 0.5em 2em;
  transition: border-color ${motion.speed.duration.transition.area.small}ms ease-in-out,
    color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out,
    background-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;

  ::placeholder {
    color: ${fadedFontColor};
  }

  &:active,
  &:focus {
    border-color: ${decentDecorationColor};
  }
`;

export default SearchInput;
