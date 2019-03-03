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

import LogosLayerBottom from "./styled/LogosLayerBottom";
import LogosLayerMiddle from "./styled/LogosLayerMiddle";
import LogosLayerTop from "./styled/LogosLayerTop";
import Window from "./styled/Window";

const Svg = styled.svg`
  display: block;
  overflow: visible;
`;

const transformLogosBottom = (x, y) => `translate3d(${-x * 0.008}px, ${-y * 0.009}px, 0)`;
const transformLogosMiddle = (x, y) => `translate3d(${-x * 0.015}px, ${-y * 0.02}px, 0)`;
const transformLogosTop = (x, y) => `translate3d(${-x * 0.03}px, ${-y * 0.038}px, 0)`;

/**
 * An interactive illustration with a 3D depth effect that reacts and animates floating port project logos based on the
 * current mouse poiner position.
 * The animation is computed with react-spring through the exported `useFloatingLogos` hook.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 * @see https://www.react-spring.io
 */
const PortProjectsWindow = ({ logoLayerTransformer, ...passProps }) => (
  <Svg {...passProps} viewBox="0 0 1678.836 503.798" xmlns="http://www.w3.org/2000/svg">
    <LogosLayerBottom style={{ transform: logoLayerTransformer(transformLogosBottom) }} />
    <LogosLayerMiddle style={{ transform: logoLayerTransformer(transformLogosMiddle) }} />
    <LogosLayerTop style={{ transform: logoLayerTransformer(transformLogosTop) }} />
    <Window />
  </Svg>
);

PortProjectsWindow.propTypes = {
  logoLayerTransformer: PropTypes.func.isRequired
};

export default PortProjectsWindow;
