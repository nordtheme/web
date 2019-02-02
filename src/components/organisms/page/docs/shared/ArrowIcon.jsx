/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { ArrowForward } from "atoms/core/vectors/icons";
import { ms } from "styles/theme";

/**
 * An styled forward pointing arrow icon.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
