/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import Icon from "./Icon";

/**
 * The clipboard icon for the read-only color value input component of the setup section.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.21.0
 */
const ClipboardIcon = styled(Icon)`
  position: absolute;
  opacity: 0.6;
  top: 25%;
  left: 0.5em;
`;

export default ClipboardIcon;
