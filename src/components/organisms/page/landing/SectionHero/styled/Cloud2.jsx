/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { ReactComponent as CloudAbstractFlat2 } from "assets/images/decorations/cloud-abstract-flat-2.svg";

import { decorationBaseStyles, decorationSectionHeroFillColor } from "../../shared/styles";

/**
 * A vector decoration component that renders a flat abstract cloud.
 * @since 0.6.0
 */
const Cloud2 = styled(CloudAbstractFlat2)`
  ${decorationBaseStyles};
  fill: ${decorationSectionHeroFillColor};
  width: 9.5em;
  top: 34%;
  left: 3%;
`;

export default Cloud2;
