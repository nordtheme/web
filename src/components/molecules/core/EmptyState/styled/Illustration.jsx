/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import IglooFront from "./svg/IglooFront";
import IglooHemisphere from "./svg/IglooHemisphere";
import IglooSide from "./svg/IglooSide";
import { illustrationDefaultProps, illustrationPropTypes } from "../shared/propTypes";

const illustrationVariantMapping = {
  iglooFront: IglooFront,
  iglooHemisphere: IglooHemisphere,
  iglooSide: IglooSide,
};

/**
 * The SVG vector illustration based on the given variant.
 * @since 0.3.0
 */
const Illustration = ({ illustrationVariant, illustrationStyles }) => {
  const StyledIllustration = styled(illustrationVariantMapping[illustrationVariant])`
    ${illustrationStyles};
  `;
  return <StyledIllustration />;
};

Illustration.propTypes = illustrationPropTypes;

Illustration.defaultProps = illustrationDefaultProps;

export default Illustration;
