/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
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
 * @since 0.5.0
 * @see https://github.com/withspectrum/spectrum/blob/e8ebdcbb/public/img/mark.svg
 */
const Spectrum = ({ className, svgRef }) => <SpectrumIcon className={className} svgRef={svgRef} />;

Spectrum.propTypes = iconPropTypes;

Spectrum.defaultProps = iconDefaultProps;

export default Spectrum;
