/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { ReactComponent as CloudAbstractFlat3 } from "assets/images/decorations/cloud-abstract-flat-3.svg";

import { decorationBaseStyles, decorationSectionHeroFillColor } from "../../shared/styles";

/**
 * A vector decoration component that renders a flat abstract cloud.
 * @since 0.6.0
 */
const Cloud3 = styled(CloudAbstractFlat3)`
  ${decorationBaseStyles};
  fill: ${decorationSectionHeroFillColor};
  width: 9.5em;
  left: 38%;
  bottom: 24%;
`;

export default Cloud3;
