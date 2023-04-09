/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * A base HTML component that represents the `<ul>` element as unordered list of items,
 * typically rendered as a bulleted list.
 * It is composed with the `li` (`<li>`) and `Ol` (`<ol>`) components.
 * @since 0.10.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
 */
const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  margin-bottom: 1em;
  padding: 0;
  padding-left: 1em;
`;

export default Ul;
