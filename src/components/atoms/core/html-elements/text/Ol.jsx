/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * A base HTML component that represents the `<ol>` element as an ordered list of items,
 * typically rendered as a numbered list.
 * It is composed with the `li` (`<li>`) and `Ul` (`<ul>`) components.
 * @since 0.10.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
 */
const Ol = styled.ol`
  list-style-type: none;
  margin: 0;
  margin-bottom: 1em;
  padding: 0;
  padding-left: 1em;
`;

export default Ol;
