/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * A base HTML component that represents the `<th>` element that defines a cell as header of a group of table cells.
 * It is composed with the `Table` (`<table>`), `Td` (`<td>`) and `Tr` (`<tr>`) components.
 * @since 0.10.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr
 */
const Th = styled.th`
  padding: 1em;
  font-weight: bold;
  text-align: center;
`;

export default Th;
