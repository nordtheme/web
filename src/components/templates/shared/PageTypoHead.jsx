/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { H1, P } from "atoms/core/html-elements";
import { colors, media, motion, ms, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const fontColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord2,
  [MODE_DARK_NIGHT_FROST]: colors.font.base[MODE_DARK_NIGHT_FROST],
});

const Headline = styled(H1)`
  font-size: ${({ fontScale }) => ms(fontScale)};
  color: ${fontColor};
  margin-bottom: 0.8em;
  font-weight: 500;
  transition: color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;

  ${media.tabletLandscape`
    font-size: ${({ fontScale }) => ms(fontScale + 1)};
  `};

  ${media.desktop`
    font-size: ${({ fontScale }) => ms(fontScale + 2)};
  `};
`;

const Subline = styled(P)`
  max-width: 80%;
  margin: 1em auto;
  font-size: ${({ fontScale }) => ms(fontScale / 3.2)};

  ${media.tabletLandscape`
    max-width: 70%;
  `};

  ${media.desktop`
    max-width: 60%;
  `};
`;

const Wrapper = styled.div`
  max-width: 90%;
  text-align: center;
  margin: 0 auto 4em auto;
`;

/**
 * A typography header consisting of a large headline and a subline.
 * @since 0.10.0
 */
const PageTypoHead = ({ headline, fontScale, subline, ...passProps }) =>
  headline || subline ? (
    <Wrapper {...passProps}>
      {headline && <Headline fontScale={fontScale}>{headline}</Headline>}
      {subline && <Subline fontScale={fontScale}>{subline}</Subline>}
    </Wrapper>
  ) : null;

PageTypoHead.propTypes = {
  fontScale: PropTypes.number.isRequired,
  headline: PropTypes.string,
  subline: PropTypes.string,
};

PageTypoHead.defaultProps = {
  headline: "",
  subline: "",
};

export default PageTypoHead;
