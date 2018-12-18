/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import PropTypes from "prop-types";

import { Headline, Illustration, Subline, TextWrapper, Wrapper } from "./styled";

/**
 * A component that represents an 404 HTTP error state through a vector illustration with a headline and subline.
 * The illustration can be styled with styled-component's `css` API passed to the `illustrationStyles` prop.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://en.wikipedia.org/wiki/HTTP_404
 * @see https://www.gatsbyjs.org/docs/add-404-page
 * @since 0.3.0
 */
const ErrorState404 = ({ headline, illustrationStyles, subline, ...passProps }) => (
  <Wrapper {...passProps}>
    <Illustration illustrationStyles={illustrationStyles} />
    <TextWrapper>
      <Headline>{headline}</Headline>
      <Subline>{subline}</Subline>
    </TextWrapper>
  </Wrapper>
);

ErrorState404.propTypes = {
  headline: PropTypes.string.isRequired,
  subline: PropTypes.string.isRequired
};

export default ErrorState404;
