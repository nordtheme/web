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
import styled from "styled-components";

import { fadedColor } from "./styles";

const StyledIcon = styled.div`
  position: relative;
  top: 0.125em;
  width: 1.2em;
  height: 1.2em;
  margin-right: 0.4em;
  fill: ${fadedColor};

  &:hover {
    fill: ${({ theme }) => theme.colors.nord8};
    cursor: pointer;
  }

  &:focused,
  &:active {
    fill: red;
  }
`;

/**
 * The styled proxy component for the read-only input icon.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.21.0
 */
const Icon = ({ svgComponent: SvgComponent, ...passProps }) => <StyledIcon as={SvgComponent} {...passProps} />;

Icon.propTypes = {
  svgComponent: PropTypes.node.isRequired
};

export default Icon;
