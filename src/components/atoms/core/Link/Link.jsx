/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import PropTypes from "prop-types";
import styled from "styled-components";

import { A } from "atoms/core/html-elements";

import { calmly, decent, minimal } from "./styles";

const variants = {
  calmly,
  decent,
  minimal
};

/**
 * A wrapper for the base HTML component `A` with multiple styles that can be selected through the `variant` prop.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.5.0
 */
const Link = styled(A)`
  ${({ variant }) => variants[variant]};
`;

Link.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants))
};

Link.defaultProps = {
  variant: "calmly"
};

export default Link;
