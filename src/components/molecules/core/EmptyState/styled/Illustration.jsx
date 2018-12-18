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

import IglooFront from "./svg/IglooFront";
import IglooHemisphere from "./svg/IglooHemisphere";
import IglooSide from "./svg/IglooSide";

const illustrationVariants = {
  IGLOO_FRONT: "iglooFront",
  IGLOO_HEMISPHERE: "iglooHemisphere",
  IGLOO_SIDE: "iglooSide"
};

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

Illustration.propTypes = {
  illustrationStyles: PropTypes.arrayOf(PropTypes.string).isRequired,
  illustrationVariant: PropTypes.oneOf([
    illustrationVariants.IGLOO_FRONT,
    illustrationVariants.IGLOO_HEMISPHERE,
    illustrationVariants.IGLOO_SIDE
  ])
};

Illustration.defaultProps = {
  illustrationVariant: illustrationVariants.IGLOO_FRONT
};

export { illustrationVariants };
export default Illustration;
