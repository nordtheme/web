/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { Subline as FeatureDuoSubline } from "molecules/page/shared/FeatureDuo";

/**
 * A shared subline component with a maximum width.
 * @since 0.9.0
 */
const Subline = styled(FeatureDuoSubline)`
  margin: 1em auto;

  ${({ theme }) => theme.media.tabletPortrait`
    max-width: 65%;
  `}
`;

export default Subline;
