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
 * A component that represents an empty state through a vector illustration with a headline and subline.
 * The illustration that'll be shown can be configured through the `illustrationVariant` prop and styled with
 * styled-component's `css` API passed to the `illustrationStyles` prop.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://material.io/design/communication/empty-states.html
 * @since 0.3.0
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
  headline: PropTypes.string.isRequired,
  subline: PropTypes.string.isRequired
};

export default EmptyState;
