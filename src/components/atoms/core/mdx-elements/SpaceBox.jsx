/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled, { css } from "styled-components";
import PropTypes from "prop-types";

/**
 * An container component that allows to add space around the wrapped components.
 * The prefixed props `top`, `right`, `bottom` and `left` are mapped to their corresponding CSS `margin` and `padding` properties.
 * @since 0.11.0
 */
const SpaceBox = styled.div`
  margin: ${({ mBottom, mLeft, mRight, mTop }) => `${mTop}em ${mRight}em ${mBottom}em ${mLeft}em`};
  padding: ${({ pBottom, pLeft, pRight, pTop }) => `${pTop}em ${pRight}em ${pBottom}em ${pLeft}em`};
  ${({ centered }) =>
    centered &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

SpaceBox.propTypes = {
  mBottom: PropTypes.number,
  mLeft: PropTypes.number,
  mRight: PropTypes.number,
  mTop: PropTypes.number,
  pBottom: PropTypes.number,
  pLeft: PropTypes.number,
  pRight: PropTypes.number,
  pTop: PropTypes.number,
};

SpaceBox.defaultProps = {
  mBottom: 0,
  mLeft: 0,
  mRight: 0,
  mTop: 0,
  pBottom: 0,
  pLeft: 0,
  pRight: 0,
  pTop: 0,
};

export default SpaceBox;
