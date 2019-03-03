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
import GatsbyImage from "gatsby-image";
import styled, { css } from "styled-components";
import { rgba } from "polished";

import { Figure } from "atoms/core/html-elements";
import { contentMdxImageFluidPropTypes } from "data/graphql/fragmentPropTypes";
import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const boxShadow = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: css`0px 10px 20px 2px ${rgba(colors.shadow.decent[MODE_BRIGHT_SNOW_FLURRY], 0.35)}`,
  [MODE_DARK_NIGHT_FROST]: css`0px 10px 20px 2px ${rgba(colors.shadow.decent[MODE_DARK_NIGHT_FROST], 0.2)}`
});

const figcaptionFontColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.font.faded[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.font.faded[MODE_DARK_NIGHT_FROST]
});

const Img = styled(GatsbyImage)`
  border-radius: ${({ rounded }) => rounded && "8px"};
  max-width: ${({ fluid, fillSize }) => (fillSize < 100 ? `${fillSize}%` : `${fluid.presentationWidth}px`)};
  margin: ${({ hasCaption }) => `0 auto ${hasCaption ? "2em" : "6em"} auto`};
  box-shadow: ${({ dropShadow }) => dropShadow && boxShadow};
  transition: box-shadow ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

const FigCaption = styled.figcaption`
  color: ${figcaptionFontColor};
  margin-bottom: 6em;
  margin-left: 1em;
  font-size: 0.875em;
`;

/**
 * An Gatsby image wrapped in a `<figure>` element with an optional caption.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 * @see https://www.gatsbyjs.org/docs/working-with-images
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure
 */
const Image = ({ children, dropShadow, rounded, fillSize, src, ...passProps }) => (
  <Figure>
    <Img
      dropShadow={dropShadow}
      fillSize={fillSize}
      fluid={src.fluid && src.fluid}
      hasCaption={!!children}
      rounded={rounded}
      {...passProps}
    />
    {children && <FigCaption>{children}</FigCaption>}
  </Figure>
);

Image.propTypes = {
  children: PropTypes.node,
  dropShadow: PropTypes.bool,
  fillSize: PropTypes.number,
  rounded: PropTypes.bool,
  ...contentMdxImageFluidPropTypes
};

Image.defaultProps = {
  children: null,
  dropShadow: false,
  fillSize: 100,
  rounded: false
};

export default Image;
