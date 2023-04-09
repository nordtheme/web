/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { organizationBrandCaptionFontSize } from "../styles";

/**
 * A brand caption.
 * @since 0.5.0
 */
const OrganizationBrandCaption = styled.span`
  font-size: ${organizationBrandCaptionFontSize};
  font-weight: 400;
  margin-left: 0.7em;
`;

export default OrganizationBrandCaption;
