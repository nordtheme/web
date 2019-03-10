/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { colors, ms, MODE_DARK_NIGHT_FROST } from "styles/theme";
import { H4 } from "atoms/core/html-elements";

/**
 * The styled title of a blog post card.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 */
const Title = styled(H4)`
  font-size: ${ms(5)};
  color: ${({ coverTitleColor }) => coverTitleColor || colors.font.base[MODE_DARK_NIGHT_FROST]};
`;

export default Title;
