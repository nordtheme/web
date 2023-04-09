/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */
import styled from "styled-components";

import { CardAction } from "../../../shared";

/**
 * A container component for an card item action.
 * @since 0.7.0
 */
const Action = styled(CardAction)`
  ${({ theme }) => theme.media.tabletPortrait`
    display: flex;
    align-items: flex-end;
  `};
`;

export default Action;
