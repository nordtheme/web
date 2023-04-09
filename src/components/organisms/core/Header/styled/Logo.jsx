/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";
import { em } from "polished";

import { Nord } from "atoms/core/vectors/logos";

import { HEADER_BRAND_LOGO_SHRINK_FACTOR } from "../shared/styles";

/**
 * Nord's logo as SVG vector graphic component with a dynamic size based on the given `size` prop.
 * @since 0.3.0
 */
const Logo = styled(Nord)`
  display: block;
  width: ${({ size }) => em(size * HEADER_BRAND_LOGO_SHRINK_FACTOR)};
  height: ${({ size }) => em(size * HEADER_BRAND_LOGO_SHRINK_FACTOR)};
`;

export default Logo;
