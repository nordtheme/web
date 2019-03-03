/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import styled, { keyframes } from "styled-components";

import CloudBottom from "./svg/CloudBottom";
import CloudTop from "./svg/CloudTop";
import NightSkyCanvas from "./svg/NightSkyCanvas";
import { illustrationPropTypes } from "../shared/propTypes";

const animFloating = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(4%, 0, 0); }
`;

const StyledCloudBottom = styled(CloudBottom)`
  animation: ${animFloating} 4000ms ease-in-out infinite alternate;
`;

const StyledCloudTop = styled(CloudTop)`
  animation: ${animFloating} 4000ms ease-in-out infinite alternate 1200ms;
`;

const Svg = styled.svg`
  ${({ illustrationStyles }) => illustrationStyles};
`;

/**
 * The SVG vector illustration.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
const Illustration = ({ illustrationStyles }) => (
  <Svg
    data-testid="nd-molecules-core-errorstate404-svg-illustration"
    illustrationStyles={illustrationStyles}
    viewBox="0 0 512.5 372.642"
    xmlns="http://www.w3.org/2000/svg"
  >
    <NightSkyCanvas data-testid="nd-molecules-core-errorstate404-svg-illustration-fragment-nightsky" />
    <StyledCloudTop data-testid="nd-molecules-core-errorstate404-svg-illustration-fragment-cloudtop" />
    <StyledCloudBottom data-testid="nd-molecules-core-errorstate404-svg-illustration-fragment-cloudbottom" />
  </Svg>
);

Illustration.propTypes = {
  ...illustrationPropTypes
};

export default Illustration;
