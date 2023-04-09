/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import PropTypes from "prop-types";
import styled from "styled-components";

import { A } from "atoms/core/html-elements";

import { calmly, decent, minimal } from "./styles";

const variants = {
  calmly,
  decent,
  minimal,
};

/**
 * A wrapper for the base HTML component `A` with multiple styles that can be selected through the `variant` prop.
 * @since 0.5.0
 */
const Link = styled(A)`
  ${({ variant }) => variants[variant]};
`;

Link.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants)),
};

Link.defaultProps = {
  variant: "calmly",
};

export default Link;
