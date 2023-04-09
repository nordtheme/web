/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { rgba } from "polished";

import { P } from "atoms/core/html-elements";
import { AlertCircle, Bulb } from "atoms/core/vectors/icons";
import { colors, ms, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";
import { transitionThemedModeSwitch } from "styles/shared";

const backgroundColorInfo = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.nord4, 0.2),
  [MODE_DARK_NIGHT_FROST]: rgba(colors.nord3, 0.35),
});

const backgroundColorWarning = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.nord13, 0.2),
  [MODE_DARK_NIGHT_FROST]: rgba(colors.nord13, 0.35),
});

const dropShadowColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.shadow.base[MODE_BRIGHT_SNOW_FLURRY], 0.35),
  [MODE_DARK_NIGHT_FROST]: rgba(colors.shadow.base[MODE_DARK_NIGHT_FROST], 0.35),
});

const variants = {
  info: {
    background: backgroundColorInfo,
    icon: Bulb,
    stripe: colors.nord9,
  },
  warn: {
    background: backgroundColorWarning,
    icon: AlertCircle,
    stripe: colors.nord13,
  },
};

const Container = styled.div`
  display: flex;
  box-shadow: inset 0 3px 0 0 ${({ variant }) => variants[variant].stripe}, 0 1px 2px 0 ${dropShadowColor};
  background-color: ${({ variant }) => variants[variant].background};
  border-radius: 0 0 8px 8px;
  padding: 1.25em;
  transition: ${transitionThemedModeSwitch("background-color")}, ${transitionThemedModeSwitch("box-shadow")};
`;

const Content = styled(P)`
  word-break: break-word;
  overflow-wrap: break-word;
`;

const IconWrapper = styled.div`
  width: 1.5em;
  height: 1.5em;
`;

const RibbonBox = styled.div`
  padding-right: 1.6em;
  flex: 0 0 1.8em;
`;

const Title = styled(P)`
  font-size: ${ms(0)};
  font-weight: 600;
`;

/**
 * An banner box that allows to highlight more important or context specific content.
 * The `variant` prop can be specified to use specific style:
 *   - `info` (default)
 *   - `warn`
 * @since 0.12.0
 */
const Banner = ({ children, title, variant }) => {
  const Icon = variants[variant].icon;
  return (
    <Container variant={variant}>
      <RibbonBox>
        <IconWrapper>
          <Icon />
        </IconWrapper>
      </RibbonBox>
      <div>
        <Title aria-level="7" role="heading">
          {title}
        </Title>
        <Content>{children}</Content>
      </div>
    </Container>
  );
};

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  variant: PropTypes.oneOf(["info", "warn"]),
};

Banner.defaultProps = {
  variant: "info",
};

export default Banner;
