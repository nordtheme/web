/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { A } from "atoms/core/html-elements";

import styles from "./styles";

const BaseButton = styled.button`
  ${styles};
`;

/**
 * A component that represents the `<button>` HTML element with multiple variants and additional props to toggle more styles.
 * It also wraps the `A` component to render a link through the `href` and `to` props.
 * @since 0.6.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 */
const Button = ({ children, dashed, disabled, ghost, href, onClick, outlined, quiet, to, variant, ...passProps }) => {
  if (href) {
    return (
      <BaseButton as={A} dashed={dashed} disabled={disabled} ghost={ghost} href={href} outlined={outlined} quiet={quiet} variant={variant} {...passProps}>
        {children}
      </BaseButton>
    );
  }
  if (to) {
    return (
      <BaseButton as={A} dashed={dashed} disabled={disabled} ghost={ghost} outlined={outlined} quiet={quiet} to={to} variant={variant} {...passProps}>
        {children}
      </BaseButton>
    );
  }
  return (
    <BaseButton dashed={dashed} disabled={disabled} ghost={ghost} onClick={onClick} outlined={outlined} quiet={quiet} variant={variant} {...passProps}>
      {children}
    </BaseButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  dashed: PropTypes.bool,
  disabled: PropTypes.bool,
  ghost: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  outlined: PropTypes.bool,
  quiet: PropTypes.bool,
  to: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "simple", "subtle"]),
};

Button.defaultProps = {
  dashed: false,
  disabled: false,
  ghost: false,
  href: "",
  onClick: () => {},
  outlined: false,
  quiet: false,
  to: "",
  variant: "simple",
};

export default Button;
