/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { ArrowForward } from "atoms/core/vectors/icons";
import { ms } from "styles/theme";

/**
 * An styled forward pointing arrow icon.
 * @since 0.8.0
 */
const ArrowIcon = styled(ArrowForward)`
  display: none;

  ${({ theme }) => theme.media.tabletPortrait`
    display: inline-block;
    width: ${ms(1)};
    vertical-align: middle;
  `};
`;

export default ArrowIcon;
