/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { ReactComponent as NordSVG } from "assets/images/logos/nord.svg";

import { themeModeFillColorStyles } from "../shared";

/**
 * The Nord logo as SVG vector graphic component.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.3.0
 */
const Nord = styled(NordSVG)`
  ${themeModeFillColorStyles};
`;

export default Nord;
