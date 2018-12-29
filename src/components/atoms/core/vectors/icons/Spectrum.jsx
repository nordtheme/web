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

import { ReactComponent as SpectrumSVG } from "assets/images/icons/spectrum.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const SpectrumIcon = styled(SpectrumSVG)`
  ${themeModeFillColorStyles};
`;

/**
 * The "Spectrum" logo icon as styled SVG vector graphic component.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://github.com/withspectrum/spectrum/blob/alpha/public/img/mark.svg
 * @since 0.5.0
 */
const Spectrum = ({ className, svgRef }) => <SpectrumIcon className={className} svgRef={svgRef} />;

Spectrum.propTypes = iconPropTypes;

Spectrum.defaultProps = iconDefaultProps;

export default Spectrum;
