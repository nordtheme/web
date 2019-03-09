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
 * A base HTML component that represents the `<caption>` element that specifies the caption (or title) of a table,
 * and if used is always the first child of a `<table>`.
 * It is used in combination with the `Table` (`<table>`) component.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
 */
const Caption = styled.caption`
  padding-bottom: 1.5em;
  caption-side: top;
  font-weight: 500;
  font-size: 1.125em;
  text-align: center;
`;

export default Caption;
