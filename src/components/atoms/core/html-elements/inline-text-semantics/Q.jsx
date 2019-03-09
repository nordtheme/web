/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

/**
 * A base HTML component that represents the `<q>` element to indicate that the enclosed text is a short inline
 * quotation.
 * It is used in combination with the `Blockquote` (`<blockquote>`) and `Cite` (`<cite>`) components.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q
 */
const Q = styled.q`
  quotes: "“" "”" "‘" "’";
`;

export default Q;
