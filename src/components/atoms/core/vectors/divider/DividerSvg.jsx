/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

/**
 * A styled SVG element with essential styles for divider vector graphic components.
 *
 * It applies two CSS styles to render problems and ensure SVG vector graphic components are handled as block-elements.
 * Setting `dislay: block` is required to prevent gaps within the container caused by the SVG being treated as text
 * element (`inline-block`) by default which gets affected by the `line-height` property. This can also be fixed by
 * setting `line-height: 0` instead.
 *
 * Due to a bug or difference between Firefox and other browser rendering engines there is a `1px` gap between rendered
 * SVGs elements and the following element.
 * Applying `bottom: -1px` prevents these gaps, but unfortunately also requires following elements in the DOM to
 * compensate for the resulting gap.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://developer.mozilla.org/de/docs/Web/SVG
 * @since 0.5.0
 */
const DividerSvg = styled.svg`
  display: block;
  bottom: -1px;
  left: 0;
  right: 0;
  width: 100%;
  background-color: transparent;
  pointer-events: none;
  user-select: none;
  vertical-align: middle;
  overflow: hidden;
`;

export default DividerSvg;
