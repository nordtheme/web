/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import CoreContent from "containers/core/Content";

/**
 * A container for content of the `Section` component.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
const Content = styled(CoreContent)`
  padding-top: ${({ compact }) => !compact && "5em"};
  padding-bottom: ${({ compact }) => !compact && "5em"};
`;

export default Content;
