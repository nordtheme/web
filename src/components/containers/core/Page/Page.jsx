/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

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
 * A basic wrapper component for page content.
 * @since 0.3.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main
 */
const Page = styled.main`
  background-color: ${({ variant }) => variants[variant]};
  transition: background-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

export default Page;
