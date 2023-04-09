/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import Icon from "./Icon";

/**
 * The clipboard icon for the read-only color value input component of the setup section.
 * @since 0.21.0
 */
const ClipboardIcon = styled(Icon)`
  position: absolute;
  opacity: 0.6;
  top: 25%;
  left: 0.5em;
`;

export default ClipboardIcon;
