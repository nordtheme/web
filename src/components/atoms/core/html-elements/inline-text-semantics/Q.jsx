/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * A base HTML component that represents the `<q>` element to indicate that the enclosed text is a short inline quotation.
 * It is used in combination with the `Blockquote` (`<blockquote>`) and `Cite` (`<cite>`) components.
 * @since 0.10.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q
 */
const Q = styled.q`
  quotes: "“" "”" "‘" "’";
`;

export default Q;
