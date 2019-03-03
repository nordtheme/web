/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
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
  iglooSide: IglooSide
};

/**
 * The SVG vector illustration based on the given variant.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
