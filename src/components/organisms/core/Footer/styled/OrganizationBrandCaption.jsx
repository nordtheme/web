/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { organizationBrandCaptionFontSize } from "../styles";

/**
 * A brand caption.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.5.0
 */
const OrganizationBrandCaption = styled.span`
  font-size: ${organizationBrandCaptionFontSize};
  font-weight: 400;
  margin-left: 0.7em;
`;

export default OrganizationBrandCaption;
