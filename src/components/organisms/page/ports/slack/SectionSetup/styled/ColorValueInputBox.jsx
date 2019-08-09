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
 * The container for the read-only input component of the setup section.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.21.0
 */
const ColorValueInputBox = styled.div`
  width: 100%;
  max-width: 16em;
  position: relative;
  margin: 1.5em auto 2em auto;

  ${({ theme }) => theme.media.tabletLandscape`
    max-width: 32em;
  `}
`;

export default ColorValueInputBox;
