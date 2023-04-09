/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./styled";

/**
 * The main wrapper for both sub-containers.
 * @since 0.6.0
 */
const FeatureDuo = ({ children, columnRatio, ...passProps }) => (
  <Wrapper columnRatio={columnRatio} {...passProps}>
    {children}
  </Wrapper>
);

FeatureDuo.propTypes = {
  children: PropTypes.node.isRequired,
  columnRatio: PropTypes.arrayOf(PropTypes.number),
};

FeatureDuo.defaultProps = {
  columnRatio: [1, 1],
};

export default FeatureDuo;
