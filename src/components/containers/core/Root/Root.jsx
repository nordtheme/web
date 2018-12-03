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
import { ThemeProvider, createGlobalStyle } from "styled-components";
import modernNormalize from "styled-modern-normalize";

import theme, { globals, normalize } from "styles/theme";

import "inter-ui/inter-ui.css";
import "typeface-rubik/index.css";
import "typeface-source-code-pro/index.css";

/**
 * A React component that injects global CSS inline styles in page headers.
 *
 * @see https://www.styled-components.com/docs/api#createglobalstyle
 * @since 0.2.0
 */
const GlobalStyle = createGlobalStyle`
  ${modernNormalize};
  ${globals};
  ${normalize};
`;

/**
 * The root container with injected global CSS styles.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.1.0
 */
const Root = ({ children }) => (
  <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Fragment>
);

Root.propTypes = {
  children: PropTypes.node.isRequired
};

export default Root;
