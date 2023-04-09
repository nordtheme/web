/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";
import GatsbyImage from "gatsby-image";
import styled, { css } from "styled-components";

import { Figure } from "atoms/core/html-elements";
import { contentMdxImageFluidPropTypes } from "data/graphql/fragmentPropTypes";
import { mixinDropShadowAmbientLight, mixinDropShadowDirectLight } from "styles/shared";

import FigCaption from "./shared/FigCaption";

const Img = styled(GatsbyImage)`
  border-radius: ${({ rounded }) => rounded && "8px"};
  max-width: ${({ fluid, fillSize }) => (fillSize < 100 ? `${fillSize}%` : `${fluid.presentationWidth}px`)};
  margin: ${({ hasCaption }) => `0 auto ${hasCaption ? "2em" : "6em"} auto`};
  box-shadow: ${({ dropShadow }) =>
    dropShadow &&
    css`
      ${mixinDropShadowDirectLight()}, ${mixinDropShadowAmbientLight()}
    `};
  user-select: none;
  pointer-events: none;
`;

/**
 * An Gatsby image wrapped in a `<figure>` element with an optional caption.
 * @since 0.10.0
 * @see https://www.gatsbyjs.com/docs/how-to/images-and-media
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure
 */
const Image = ({ children, fillSize, dropShadow, rounded, ...passProps }) =>
  children ? (
    <Figure>
      <Img dropShadow={dropShadow} fillSize={fillSize} hasCaption={!!children} rounded={rounded} {...passProps} />
      {children && <FigCaption>{children}</FigCaption>}
    </Figure>
  ) : (
    <Img dropShadow={dropShadow} fillSize={fillSize} hasCaption={!!children} rounded={rounded} {...passProps} />
  );

Image.propTypes = {
  children: PropTypes.node,
  dropShadow: PropTypes.bool,
  fillSize: PropTypes.number,
  rounded: PropTypes.bool,
  ...contentMdxImageFluidPropTypes,
};

Image.defaultProps = {
  children: null,
  dropShadow: false,
  fillSize: 100,
  rounded: false,
};

export default Image;
