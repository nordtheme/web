/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { media, motion, ms } from "styles/theme";

const Wrapper = styled.div`
  font-size: ${ms(1)};
  display: flex;
  flex-direction: column;

  ${media.desktop`
    font-size: ${ms(1)};
  `};
`;

const Prefix = styled.div`
  font-size: ${ms(1)};
  color: ${({ theme }) => theme.colors.nord8};
  font-weight: 300;
`;

const Title = styled.div`
  transition: color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

/**
 * The title of a port project card with a "Nord" prefix.
 * @since 0.9.0
 */
const CardTitle = ({ children, ...passProps }) => (
  <Wrapper {...passProps}>
    <Prefix>Nord</Prefix>
    <Title>{children}</Title>
  </Wrapper>
);

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardTitle;
