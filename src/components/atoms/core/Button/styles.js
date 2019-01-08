/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import { css } from "styled-components";
import { darken, lighten, rgba } from "polished";

import { colors, motion, themedModeVariant, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const backgroundColor = themedModeVariant({
  primary: {
    [MODE_BRIGHT_SNOW_FLURRY]: colors.nord8,
    [MODE_DARK_NIGHT_FROST]: colors.nord8
  },
  secondary: {
    [MODE_BRIGHT_SNOW_FLURRY]: colors.nord9,
    [MODE_DARK_NIGHT_FROST]: colors.nord9
  },
  simple: {
    [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.nord6, 0.45),
    [MODE_DARK_NIGHT_FROST]: rgba(colors.nord1, 0.8)
  },
  subtle: {
    [MODE_BRIGHT_SNOW_FLURRY]: "transparent",
    [MODE_DARK_NIGHT_FROST]: "transparent"
  }
});

const backgroundColorActive = themedModeVariant({
  primary: {
    [MODE_BRIGHT_SNOW_FLURRY]: darken(0.08, colors.nord8),
    [MODE_DARK_NIGHT_FROST]: darken(0.08, colors.nord8)
  },
  secondary: {
    [MODE_BRIGHT_SNOW_FLURRY]: darken(0.08, colors.nord9),
    [MODE_DARK_NIGHT_FROST]: darken(0.08, colors.nord9)
  },
  simple: {
    [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.nord6, 0.85),
    [MODE_DARK_NIGHT_FROST]: colors.nord2
  },
  subtle: {
    [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.nord6, 0.85),
    [MODE_DARK_NIGHT_FROST]: colors.nord2
  }
});

const backgroundColorHover = themedModeVariant({
  primary: {
    [MODE_BRIGHT_SNOW_FLURRY]: darken(0.04, colors.nord8),
    [MODE_DARK_NIGHT_FROST]: darken(0.04, colors.nord8)
  },
  secondary: {
    [MODE_BRIGHT_SNOW_FLURRY]: darken(0.04, colors.nord9),
    [MODE_DARK_NIGHT_FROST]: darken(0.04, colors.nord9)
  },
  simple: {
    [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.nord6, 0.65),
    [MODE_DARK_NIGHT_FROST]: rgba(colors.nord2, 0.7)
  },
  subtle: {
    [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.nord6, 0.65),
    [MODE_DARK_NIGHT_FROST]: rgba(colors.nord2, 0.7)
  }
});

const borderColor = themedModeVariant({
  primary: {
    [MODE_BRIGHT_SNOW_FLURRY]: ({ ghost, quiet }) =>
      ghost && !quiet ? colors.nord8 : colors.font.base[MODE_BRIGHT_SNOW_FLURRY],
    [MODE_DARK_NIGHT_FROST]: ({ ghost, quiet }) =>
      ghost && !quiet ? colors.nord8 : colors.font.base[MODE_BRIGHT_SNOW_FLURRY]
  },
  secondary: {
    [MODE_BRIGHT_SNOW_FLURRY]: ({ ghost, quiet }) =>
      ghost && !quiet ? colors.nord9 : colors.font.base[MODE_BRIGHT_SNOW_FLURRY],
    [MODE_DARK_NIGHT_FROST]: ({ ghost, quiet }) =>
      ghost && !quiet ? colors.nord9 : colors.font.base[MODE_BRIGHT_SNOW_FLURRY]
  },
  simple: {
    [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.font.base[MODE_BRIGHT_SNOW_FLURRY], 0.75),
    [MODE_DARK_NIGHT_FROST]: rgba(colors.font.base[MODE_BRIGHT_SNOW_FLURRY], 0.75)
  },
  subtle: {
    [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.font.base[MODE_BRIGHT_SNOW_FLURRY], 0.75),
    [MODE_DARK_NIGHT_FROST]: rgba(colors.font.base[MODE_BRIGHT_SNOW_FLURRY], 0.75)
  }
});

const borderColorActive = themedModeVariant({
  primary: {
    [MODE_BRIGHT_SNOW_FLURRY]: darken(0.08, colors.nord8),
    [MODE_DARK_NIGHT_FROST]: darken(0.08, colors.nord8)
  },
  secondary: {
    [MODE_BRIGHT_SNOW_FLURRY]: darken(0.08, colors.nord9),
    [MODE_DARK_NIGHT_FROST]: darken(0.08, colors.nord9)
  },
  simple: {
    [MODE_BRIGHT_SNOW_FLURRY]: colors.nord2,
    [MODE_DARK_NIGHT_FROST]: lighten(0.03, colors.font.base[MODE_BRIGHT_SNOW_FLURRY])
  },
  subtle: {
    [MODE_BRIGHT_SNOW_FLURRY]: colors.nord2,
    [MODE_DARK_NIGHT_FROST]: lighten(0.03, colors.font.base[MODE_BRIGHT_SNOW_FLURRY])
  }
});

const borderColorDisabled = themedModeVariant({
  primary: {
    [MODE_BRIGHT_SNOW_FLURRY]: ({ ghost, quiet }) =>
      ghost && !quiet ? rgba(colors.nord8, 0.6) : rgba(colors.font.base[MODE_BRIGHT_SNOW_FLURRY], 0.4),
    [MODE_DARK_NIGHT_FROST]: ({ ghost, quiet }) =>
      ghost && !quiet ? rgba(colors.nord8, 0.6) : rgba(colors.font.base[MODE_BRIGHT_SNOW_FLURRY], 0.75)
  },
  secondary: {
    [MODE_BRIGHT_SNOW_FLURRY]: ({ ghost, quiet }) =>
      ghost && !quiet ? rgba(colors.nord9, 0.6) : rgba(colors.font.base[MODE_BRIGHT_SNOW_FLURRY], 0.4),
    [MODE_DARK_NIGHT_FROST]: ({ ghost, quiet }) =>
      ghost && !quiet ? rgba(colors.nord9, 0.65) : rgba(colors.font.base[MODE_BRIGHT_SNOW_FLURRY], 0.75)
  },
  simple: {
    [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.font.base[MODE_BRIGHT_SNOW_FLURRY], 0.4),
    [MODE_DARK_NIGHT_FROST]: rgba(colors.font.base[MODE_BRIGHT_SNOW_FLURRY], 0.75)
  },
  subtle: {
    [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.font.base[MODE_BRIGHT_SNOW_FLURRY], 0.4),
    [MODE_DARK_NIGHT_FROST]: rgba(colors.font.base[MODE_BRIGHT_SNOW_FLURRY], 0.75)
  }
});

const borderColorHover = themedModeVariant({
  primary: {
    [MODE_BRIGHT_SNOW_FLURRY]: ({ ghost }) => (ghost ? darken(0.04, colors.nord8) : rgba(colors.nord0, 0.8)),
    [MODE_DARK_NIGHT_FROST]: ({ ghost }) =>
      ghost ? darken(0.04, colors.nord8) : lighten(0.045, colors.font.base[MODE_BRIGHT_SNOW_FLURRY])
  },
  secondary: {
    [MODE_BRIGHT_SNOW_FLURRY]: ({ ghost }) => (ghost ? darken(0.04, colors.nord9) : rgba(colors.nord0, 0.8)),
    [MODE_DARK_NIGHT_FROST]: ({ ghost }) =>
      ghost ? darken(0.04, colors.nord9) : rgba(colors.font.base[MODE_BRIGHT_SNOW_FLURRY], 0.75)
  },
  simple: {
    [MODE_BRIGHT_SNOW_FLURRY]: colors.font.base[MODE_BRIGHT_SNOW_FLURRY],
    [MODE_DARK_NIGHT_FROST]: rgba(lighten(0.05, colors.font.base[MODE_BRIGHT_SNOW_FLURRY]), 0.75)
  },
  subtle: {
    [MODE_BRIGHT_SNOW_FLURRY]: colors.font.base[MODE_BRIGHT_SNOW_FLURRY],
    [MODE_DARK_NIGHT_FROST]: rgba(lighten(0.05, colors.font.base[MODE_BRIGHT_SNOW_FLURRY]), 0.75)
  }
});

const borderStyle = ({ dashed }) => (dashed ? "dashed" : "solid");

const fontColor = themedModeVariant({
  primary: {
    [MODE_BRIGHT_SNOW_FLURRY]: ({ ghost, outlined, quiet }) => {
      if (outlined && ghost) {
        return quiet ? colors.font.base[MODE_BRIGHT_SNOW_FLURRY] : colors.nord8;
      }
      return colors.nord1;
    },
    [MODE_DARK_NIGHT_FROST]: ({ ghost, outlined, quiet }) => {
      if (outlined && ghost) {
        return quiet ? colors.font.base[MODE_DARK_NIGHT_FROST] : colors.nord8;
      }
      return colors.nord1;
    }
  },
  secondary: {
    [MODE_BRIGHT_SNOW_FLURRY]: ({ ghost, outlined, quiet }) => {
      if (outlined && ghost) {
        return quiet ? colors.font.base[MODE_BRIGHT_SNOW_FLURRY] : colors.nord9;
      }
      return colors.nord1;
    },
    [MODE_DARK_NIGHT_FROST]: ({ ghost, outlined, quiet }) => {
      if (outlined && ghost) {
        return quiet ? colors.font.base[MODE_DARK_NIGHT_FROST] : colors.nord9;
      }
      return colors.nord1;
    }
  },
  simple: {
    [MODE_BRIGHT_SNOW_FLURRY]: colors.font.base[MODE_BRIGHT_SNOW_FLURRY],
    [MODE_DARK_NIGHT_FROST]: colors.font.base[MODE_DARK_NIGHT_FROST]
  },
  subtle: {
    [MODE_BRIGHT_SNOW_FLURRY]: ({ quiet }) => (quiet ? colors.font.base[MODE_BRIGHT_SNOW_FLURRY] : colors.nord10),
    [MODE_DARK_NIGHT_FROST]: ({ quiet }) => (quiet ? colors.font.base[MODE_DARK_NIGHT_FROST] : colors.nord8)
  }
});

const fontColorActive = themedModeVariant({
  primary: {
    [MODE_BRIGHT_SNOW_FLURRY]: darken(0.08, colors.nord8),
    [MODE_DARK_NIGHT_FROST]: darken(0.08, colors.nord8)
  },
  secondary: {
    [MODE_BRIGHT_SNOW_FLURRY]: darken(0.08, colors.nord9),
    [MODE_DARK_NIGHT_FROST]: darken(0.08, colors.nord9)
  },
  simple: {
    [MODE_BRIGHT_SNOW_FLURRY]: colors.nord2,
    [MODE_DARK_NIGHT_FROST]: lighten(0.1, colors.font.base[MODE_DARK_NIGHT_FROST])
  },
  subtle: {
    [MODE_BRIGHT_SNOW_FLURRY]: ({ quiet }) => (quiet ? colors.nord2 : colors.nord10),
    [MODE_DARK_NIGHT_FROST]: ({ quiet }) =>
      quiet ? lighten(0.1, colors.font.base[MODE_DARK_NIGHT_FROST]) : darken(0.08, colors.nord8)
  }
});

const fontColorDisabled = themedModeVariant({
  primary: {
    [MODE_BRIGHT_SNOW_FLURRY]: ({ ghost, quiet }) =>
      ghost && !quiet ? rgba(colors.nord8, 0.6) : rgba(colors.font.base[MODE_BRIGHT_SNOW_FLURRY], 0.4),
    [MODE_DARK_NIGHT_FROST]: ({ ghost, quiet }) =>
      ghost && !quiet ? rgba(colors.nord8, 0.6) : rgba(colors.font.base[MODE_BRIGHT_SNOW_FLURRY], 0.8)
  },
  secondary: {
    [MODE_BRIGHT_SNOW_FLURRY]: ({ ghost, quiet }) =>
      ghost && !quiet ? rgba(colors.nord9, 0.6) : rgba(colors.font.base[MODE_BRIGHT_SNOW_FLURRY], 0.4),
    [MODE_DARK_NIGHT_FROST]: ({ ghost, quiet }) =>
      ghost && !quiet ? rgba(colors.nord9, 0.65) : rgba(colors.font.base[MODE_BRIGHT_SNOW_FLURRY], 0.8)
  },
  simple: {
    [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.font.base[MODE_BRIGHT_SNOW_FLURRY], 0.4),
    [MODE_DARK_NIGHT_FROST]: rgba(colors.font.base[MODE_BRIGHT_SNOW_FLURRY], 0.8)
  },
  subtle: {
    [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.font.base[MODE_BRIGHT_SNOW_FLURRY], 0.4),
    [MODE_DARK_NIGHT_FROST]: rgba(colors.font.base[MODE_BRIGHT_SNOW_FLURRY], 0.8)
  }
});

const fontColorHover = themedModeVariant({
  primary: {
    [MODE_BRIGHT_SNOW_FLURRY]: darken(0.04, colors.nord8),
    [MODE_DARK_NIGHT_FROST]: darken(0.04, colors.nord8)
  },
  secondary: {
    [MODE_BRIGHT_SNOW_FLURRY]: darken(0.04, colors.nord9),
    [MODE_DARK_NIGHT_FROST]: darken(0.04, colors.nord9)
  },
  simple: {
    [MODE_BRIGHT_SNOW_FLURRY]: darken(0.05, colors.font.base[MODE_BRIGHT_SNOW_FLURRY]),
    [MODE_DARK_NIGHT_FROST]: lighten(0.05, colors.font.base[MODE_DARK_NIGHT_FROST])
  },
  subtle: {
    [MODE_BRIGHT_SNOW_FLURRY]: ({ quiet }) =>
      quiet ? darken(0.05, colors.font.base[MODE_BRIGHT_SNOW_FLURRY]) : darken(0.05, colors.nord10),
    [MODE_DARK_NIGHT_FROST]: ({ quiet }) =>
      quiet ? lighten(0.05, colors.font.base[MODE_DARK_NIGHT_FROST]) : darken(0.04, colors.nord8)
  }
});

const base = css`
  display: inline-flex;
  align-items: center;
  font-size: inherit;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  white-space: nowrap;
  border: none;
  border-radius: 0.25em;
  background: none;
  padding: 0.375em 0.75em;
  user-select: none;

  &:hover:not(:disabled) {
    cursor: pointer;
  }

  &:active,
  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const styles = css`
  ${base};
  color: ${fontColor};
  background-color: ${({ ghost }) => !ghost && backgroundColor};
  transition: background-color ${motion.speed.duration.transition.text.fade}ms ease-in,
    border-color ${motion.speed.duration.transition.text.fade}ms ease-in,
    box-shadow ${motion.speed.duration.transition.text.fade}ms ease-in,
    color ${motion.speed.duration.transition.text.fade}ms ease-in;
  ${({ outlined }) =>
    outlined &&
    css`
      border: 0.0625em ${borderStyle} ${borderColor};
    `};

  /*  indent */
  &:hover:not(:disabled) {
    background-color: ${({ ghost }) => !ghost && backgroundColorHover};
    ${({ ghost, outlined }) =>
      outlined && // eslint-disable-line indent
      css`
        border-color: ${borderColorHover};
        color: ${ghost && fontColorHover};
      `};
  }

  &:active:not(:disabled) {
    background-color: ${({ ghost }) => !ghost && backgroundColorActive};
    ${({ ghost, outlined }) =>
      outlined && // eslint-disable-line indent
      css`
        border-color: ${ghost && borderColorActive};
        color: ${ghost && fontColorActive};
      `};
  }

  &:disabled {
    color: ${fontColorDisabled};
    ${({ outlined }) =>
      outlined && // eslint-disable-line indent
      css`
        border-color: ${borderColorDisabled};
      `};
  }
`;

export default styles;
