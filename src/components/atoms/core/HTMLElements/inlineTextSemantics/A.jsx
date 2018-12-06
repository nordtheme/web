/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

import { isRouteInternal } from "utils";

const BaseComponent = styled.a`
  color: inherit;
  cursor: pointer;
  text-decoration: none;

  &:active,
  &:focus,
  &:hover,
  &:visited {
    outline: none;
  }
`;

/**
 * A dynamic and failsafe component which either renders to a base HTML link `<a>` (anchor) or a "Gatsby Link" based on
 * the target/URL type, internal or external, passed to the `to` and `href` props.
 *
 * @example <caption>Usage</caption>
 * <!-- The target is external so both will render to `<a>` with the `href` prop. -->
 * <A href="https://arcticicestudio.github.io/nord">Nord</A>
 * <A to="https://arcticicestudio.github.io/nord">Nord</A>
 * <!-- The target is internal so both will render to `<Link>` with the `to` prop. -->
 * <A to="/blog">Blog</A>
 * <A href="/blog">Blog</A>
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 * @see https://www.gatsbyjs.org/docs/gatsby-link
 * @since 0.3.0
 */
const A = ({ children, href, to, ...passProps }) =>
  isRouteInternal(to) || isRouteInternal(href) ? (
    <BaseComponent as={Link} to={to || href} {...passProps}>
      {children}
    </BaseComponent>
  ) : (
    <BaseComponent href={href || to} {...passProps}>
      {children}
    </BaseComponent>
  );

A.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string
};

A.defaultProps = { to: "" };

export default A;
