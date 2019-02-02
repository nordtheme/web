/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import PropTypes from "prop-types";
import styled from "styled-components";

import { motion } from "styles/theme";

import {
  baseBackgroundColor,
  primaryBackgroundColor,
  secondaryBackgroundColor,
  tertiaryBackgroundColor
} from "../shared/styles";

const variants = {
  base: baseBackgroundColor,
  primary: primaryBackgroundColor,
  secondary: secondaryBackgroundColor,
  tertiary: tertiaryBackgroundColor
};

/**
 * A base HTML component that represents a `<section>` with multiple base style variants.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section
 * @see https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines
 * @since 0.3.0
 */
const Section = styled.section`
  background-color: ${({ variant }) => variants[variant]};
  transition: background-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
  position: ${({ decorated }) => decorated && "relative"};
`;

Section.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants))
};

Section.defaultProps = {
  variant: "base"
};

export default Section;
