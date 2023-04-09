/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";

import { Headline, Illustration, Subline, TextWrapper, Wrapper } from "./styled";
import { illustrationPropTypes } from "./shared/propTypes";

/**
 * A component that represents an empty state through a vector illustration with a headline and subline.
 * The illustration that'll be shown can be configured through the `illustrationVariant` prop and styled with styled-component's `css` API passed to the
 * `illustrationStyles` prop.
 * @since 0.3.0
 * @see https://m2.material.io/design/communication/empty-states.html#content
 */
const EmptyState = ({ headline, illustrationStyles, illustrationVariant, subline, ...passProps }) => (
  <Wrapper {...passProps}>
    <Illustration illustrationStyles={illustrationStyles} illustrationVariant={illustrationVariant} />
    <TextWrapper>
      <Headline>{headline}</Headline>
      <Subline>{subline}</Subline>
    </TextWrapper>
  </Wrapper>
);

EmptyState.propTypes = {
  ...illustrationPropTypes,
  headline: PropTypes.string.isRequired,
  subline: PropTypes.string.isRequired,
};

export default EmptyState;
