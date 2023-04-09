/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { ReactComponent as ArcticIceStudioSVG } from "assets/images/logos/arcticicestudio.svg";

import { themeModeFillColorStyles } from "../shared";

/**
 * The Arctic Ice Studio logo as SVG vector graphic component.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.5.0
 */
const ArcticIceStudio = styled(ArcticIceStudioSVG)`
  ${themeModeFillColorStyles};
`;

export default ArcticIceStudio;
