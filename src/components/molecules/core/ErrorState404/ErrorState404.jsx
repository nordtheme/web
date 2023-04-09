/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";

import { Headline, Illustration, Subline, TextWrapper, Wrapper } from "./styled";
import { illustrationPropTypes } from "./shared/propTypes";

/**
 * A component that represents an 404 HTTP error state through a vector illustration with a headline and subline.
 * The illustration can be styled with styled-component's `css` API passed to the `illustrationStyles` prop.
 * @since 0.3.0
 * @see https://en.wikipedia.org/wiki/HTTP_404
 * @see https://www.gatsbyjs.com/docs/how-to/adding-common-features/add-404-page/
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
  ...illustrationPropTypes,
  headline: PropTypes.string.isRequired,
  subline: PropTypes.string.isRequired,
};

export default ErrorState404;
