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

import Ol from "./Ol";
import Ul from "./Ul";

const fontColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.font.base[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.nord4
});

const backgroundColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord6,
  [MODE_DARK_NIGHT_FROST]: colors.nord3
});

/**
 * A base HTML component that represents the `<li>` element as item in a list.
 * It is composed with the `Ol` (`<ol>`) and `Ul` (`<ul>`) components.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
 */
const Li = styled.li`
  margin-bottom: ${({ forMDX }) => (forMDX ? "1em" : 0)};
  margin-top: ${({ forMDX }) => (forMDX ? "1em" : 0)};

  ${Ol} & {
    counter-increment: ol-counter;
    position: relative;
    margin-left: 1em;

    &:before {
      content: counter(ol-counter);
      position: absolute;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      left: -2.66667em;
      top: 0;
      width: 1.66667em;
      height: 1.66667em;
      border-radius: 50%;
      background-color: ${backgroundColor};
      color: ${fontColor};
      font-size: 0.75em;
      font-weight: 600;
      transition: background-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out,
        color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
    }
  }

  ${Ul} & {
    position: relative;
    margin-left: 1em;

    &:before {
      content: "";
      position: absolute;
      width: 6px;
      height: 6px;
      top: 10px;
      left: -32px;
      border-radius: 50%;
      background-color: ${backgroundColor};
      transition: background-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
    }
  }
`;

export default Li;
