/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { borderColor } from "../shared/styles";

/**
 * A base HTML component that represents the `<table>` element to represent tabular data.
 * It is used in combination with the `Caption` (`<caption>`) component.
 * @since 0.10.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
 */
const Table = styled.table`
  line-height: inherit;
  width: 100%;
  /*border-collapse: collapse;*/
  margin-top: 0;
  margin-bottom: 1em;
  border-radius: 8px;
  border: 1px solid ${borderColor};
  border-spacing: 0;
  overflow: auto;
`;

export default Table;
