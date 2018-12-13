/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import Content from "containers/core/Content";

/**
 * A flexbox container that vertically aligns the content in the center with dynamic space.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
const ContentBox = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default ContentBox;
