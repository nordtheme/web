/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
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
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
const BaseLayout = ({ children, pathName }) => (
  <Root>
    <Fragment>
      <SiteMetadata pathName={pathName} />
      <Header />
      <Page>{children}</Page>
      <Footer />
    </Fragment>
  </Root>
);

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pathName: PropTypes.string.isRequired
};

export default BaseLayout;
