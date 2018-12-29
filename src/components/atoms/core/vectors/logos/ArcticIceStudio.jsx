/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { ReactComponent as ArcticIceStudioSVG } from "assets/images/logos/arcticicestudio.svg";

import { themeModeFillColorStyles } from "../shared";

/**
 * The Arctic Ice Studio logo as SVG vector graphic component.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://arcticicestudio.com
 * @since 0.5.0
 */
const ArcticIceStudio = styled(ArcticIceStudioSVG)`
  ${themeModeFillColorStyles};
`;

export default ArcticIceStudio;
