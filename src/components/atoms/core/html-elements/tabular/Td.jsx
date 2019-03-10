/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { motion } from "styles/theme";

import { borderColor } from "../shared/styles";

/**
 * A base HTML component that represents the `<td>` element that defines a cell of a table that contains data.
 * It is composed with the `Table` (`<table>`), `Th` (`<th>`) and `Tr` (`<tr>`) components.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr
 */
const Td = styled.td`
  padding: 1em;
  text-align: center;
  border-top: 1px solid ${borderColor};
  transition: border-top ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

export default Td;
