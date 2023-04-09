/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * A base HTML component that represents the `<cite>` element to describe a reference to a cited creative work.
 * It is used in combination with the `Blockquote` (`<blockquote>`) and `Q` (`<q>`) components.
 * @since 0.10.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q
 */
const Cite = styled.cite`
  display: block;
  margin-bottom: 2.5em;
  text-align: right;
  font-style: inherit;

  &:before {
    content: "— ";
    margin-left: -1em;
  }
`;

export default Cite;
