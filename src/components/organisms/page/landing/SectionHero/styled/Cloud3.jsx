/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { ReactComponent as CloudAbstractFlat3 } from "assets/images/decorations/cloud-abstract-flat-3.svg";

import { decorationBaseStyles, decorationSectionHeroFillColor } from "../../shared/styles";

/**
 * A vector decoration component that renders a flat abstract cloud.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
