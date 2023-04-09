/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { colors, ms, MODE_DARK_NIGHT_FROST } from "styles/theme";
import { H4 } from "atoms/core/html-elements";

/**
 * The styled title of a blog post card.
 * @since 0.10.0
 */
const Title = styled(H4)`
  font-size: ${ms(5)};
  color: ${({ coverTitleColor }) => coverTitleColor || colors.font.base[MODE_DARK_NIGHT_FROST]};
`;

export default Title;
