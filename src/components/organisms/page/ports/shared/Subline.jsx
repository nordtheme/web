/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { Subline as FeatureDuoSubline } from "molecules/page/shared/FeatureDuo";

/**
 * A shared subline component with a maximum width.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const Subline = styled(FeatureDuoSubline)`
  margin: 1em auto;

  ${({ theme }) => theme.media.tabletPortrait`
    max-width: 65%;
  `}
`;

export default Subline;
