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
import styled, { css } from "styled-components";

import { isRouteInternal } from "utils";

const baseStyles = css`
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

const BaseComponent = styled.a`
  ${baseStyles};
`;

const BaseGatsbyLink = styled(Link)`
  ${baseStyles}
`;

/**
 * A dynamic and failsafe component which either renders to a base HTML link `<a>` (anchor) or a "Gatsby Link" based on
 * the target/URL type, internal or external, passed to the `to` and `href` props.
 *
 * Note: The currently used version of "Gatsby Link" uses the `innerRef` prop to allow `ref` access to the underlying
 * DOM element (necessary for animations). This legacy behavior is about to change in the future to the
 * `React.forwardRef` API.
 * See https://github.com/gatsbyjs/gatsby/pull/9892 for more details.
 *
 * @example <caption>Usage</caption>
 * <!-- The target is external so both will render to `<a>` with the `href` prop. -->
 * <A href="https://arcticicestudio.github.io/nord">Nord</A>
 * <A to="https://arcticicestudio.github.io/nord">Nord</A>
 * <!-- The target is internal so both will render to `<Link>` with the `to` prop. -->
 * <A to="/blog">Blog</A>
 * <A href="/blog">Blog</A>
 * <!-- Allow ref access to the underlying "Gatsby Link" DOM element. -->
 * const RefLink = React.forwardRef(({children, ...passProps}, ref) => (
 *   <A innerRef={ref} {...passProps}>
 *     {children}
 *   </A>
 * );
 * <RefLink to="/blog">Blog</RefLink>
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 * @see https://www.gatsbyjs.org/docs/gatsby-link
 * @see https://github.com/gatsbyjs/gatsby/pull/9892
 * @since 0.3.0
 */
const A = ({ children, href, to, linkRef, ...passProps }) =>
  isRouteInternal(to) || isRouteInternal(href) ? (
    <BaseGatsbyLink innerRef={linkRef} to={to || href} {...passProps}>
      {children}
    </BaseGatsbyLink>
  ) : (
    <BaseComponent ref={linkRef} href={href || to} {...passProps}>
      {children}
    </BaseComponent>
  );

A.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.node,
  linkRef: PropTypes.func,
  to: PropTypes.string
};

A.defaultProps = {
  href: null,
  linkRef: null,
  to: ""
};

/* eslint-disable-next-line react/prop-types */
export default React.forwardRef(({ children, ...passProps }, ref) => (
  <A linkRef={ref} {...passProps}>
    {children}
  </A>
));
