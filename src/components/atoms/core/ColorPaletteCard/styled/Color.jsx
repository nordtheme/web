/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * The container representing a single color code.
 * @since 0.6.0
 */
const Color = styled.div`
  background-color: ${({ color }) => color};
  width: 100%;
  height: 100%;
`;

export default Color;
