/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * A base HTML component that represents a paragraph.
 * @since 0.3.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p
 */
const P = styled.p`
  margin-top: ${({ forMDX }) => (forMDX ? "1.6em" : 0)};
  margin-bottom: ${({ forMDX }) => (forMDX ? "1.6em" : "1em")};
`;

export default P;
