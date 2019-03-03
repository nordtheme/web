/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const backgroundColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord0,
  [MODE_DARK_NIGHT_FROST]: colors.nord3
});

const Container = styled.div`
  display: inline-flex;
  border-radius: 50%;
  padding: 0.75em;
  margin-bottom: 1em;
  justify-content: center;
  background-color: ${backgroundColor};
  width: 3em;
  height: 3em;
  transition: background-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

/**
 * The logo of a port project card.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const CardLogo = ({ svgComponent: SvgComponent, ...passProps }) => (
  <Container>
    <SvgComponent {...passProps} />
  </Container>
);

CardLogo.propTypes = {
  svgComponent: PropTypes.node.isRequired
};

export default CardLogo;
