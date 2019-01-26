/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { CardAction } from "../../../shared";

/**
 * A container component for an card item action.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.7.0
 */
const Action = styled(CardAction)`
  ${({ theme }) => theme.media.tabletPortrait`
    display: flex;
    align-items: flex-end;
  `};
`;

export default Action;
