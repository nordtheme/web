/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";
import { em } from "polished";

import { Nord } from "atoms/core/vectors/logos";

import { HEADER_BRAND_LOGO_SHRINK_FACTOR } from "../shared/styles";

/**
 * Nord's logo as SVG vector graphic component with a dynamic size based on the given `size` prop.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
const Logo = styled(Nord)`
  display: block;
  width: ${({ size }) => em(size * HEADER_BRAND_LOGO_SHRINK_FACTOR)};
  height: ${({ size }) => em(size * HEADER_BRAND_LOGO_SHRINK_FACTOR)};
`;

export default Logo;
