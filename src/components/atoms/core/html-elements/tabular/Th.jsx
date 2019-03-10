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
 * A base HTML component that represents the `<th>` element that defines a cell as header of a group of table cells.
 * It is composed with the `Table` (`<table>`), `Td` (`<td>`) and `Tr` (`<tr>`) components.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
