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

import { Wrapper } from "./styled";

/**
 * The main wrapper for both sub-containers.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.6.0
 */
const FeatureDuo = ({ children, columnRatio, ...passProps }) => (
  <Wrapper columnRatio={columnRatio} {...passProps}>
    {children}
  </Wrapper>
);

FeatureDuo.propTypes = {
  children: PropTypes.node.isRequired,
  columnRatio: PropTypes.arrayOf(PropTypes.number)
};

FeatureDuo.defaultProps = {
  columnRatio: [1, 1]
};

export default FeatureDuo;
