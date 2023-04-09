/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { ReactComponent as CloudAbstractFlat } from "assets/images/decorations/cloud-abstract-flat.svg";

import { decorationBaseStyles, decorationSectionHeroFillColor } from "../../shared/styles";

/**
 * A vector decoration component that renders a flat abstract cloud.
 * @since 0.6.0
 */
const Cloud1 = styled(CloudAbstractFlat)`
  ${decorationBaseStyles};
  fill: ${decorationSectionHeroFillColor};
  width: 9.5em;
  top: 8%;
  left: 8%;
`;

export default Cloud1;
