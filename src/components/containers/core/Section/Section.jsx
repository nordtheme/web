/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import PropTypes from "prop-types";
import styled from "styled-components";

import { motion } from "styles/theme";

import { baseBackgroundColor, primaryBackgroundColor, secondaryBackgroundColor, tertiaryBackgroundColor } from "../shared/styles";

const variants = {
  base: baseBackgroundColor,
  primary: primaryBackgroundColor,
  secondary: secondaryBackgroundColor,
  tertiary: tertiaryBackgroundColor,
};

/**
 * A base HTML component that represents a `<section>` with multiple base style variants.
 * @since 0.3.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
 */
const Section = styled.section`
  background-color: ${({ variant }) => variants[variant]};
  transition: background-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
  position: ${({ decorated }) => decorated && "relative"};
`;

Section.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants)),
};

Section.defaultProps = {
  variant: "base",
};

export default Section;
