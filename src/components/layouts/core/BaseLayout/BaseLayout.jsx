/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Footer from "organisms/core/Footer";
import Header from "organisms/core/Header";
import Page from "containers/core/Page";
import Root from "containers/core/Root";
import SiteMetadata from "atoms/core/SiteMetadata";

/**
 * The base page layout providing the main container that wraps the content.
 * @since 0.3.0
 */
const BaseLayout = ({ children, headerVariant, pathName }) => (
  <Root>
    <Fragment>
      <SiteMetadata pathName={pathName} />
      <Header variant={headerVariant} />
      <Page variant={headerVariant}>{children}</Page>
      <Footer />
    </Fragment>
  </Root>
);

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
  headerVariant: PropTypes.string,
  pathName: PropTypes.string.isRequired,
};

BaseLayout.defaultProps = {
  headerVariant: "base",
};

export default BaseLayout;
