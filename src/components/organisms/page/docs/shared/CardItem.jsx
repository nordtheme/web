/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { colors, ms, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const backgroundColorHover = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.shadow.decent[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.shadow.decent[MODE_DARK_NIGHT_FROST]
});

/**
 * A component that represents a card item.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.8.0
 */
const CardItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 1.5em;
  font-size: ${ms(0)};
  border-radius: 8px;
  transition: background-color ${motion.speed.duration.transition.area.small}ms ease-in-out;

  &:active,
  &:focus,
  &:hover {
    background-color: ${({ inProgress }) => !inProgress && backgroundColorHover};
  }

  ${({ theme }) => theme.media.tabletPortrait`
    flex-direction: row;
  `};
`;

export default CardItem;
