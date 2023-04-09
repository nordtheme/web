/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import Content from "containers/core/Content";

/**
 * A flexbox container that vertically aligns the content in the center with dynamic space.
 * @since 0.3.0
 */
const ContentBox = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default ContentBox;
