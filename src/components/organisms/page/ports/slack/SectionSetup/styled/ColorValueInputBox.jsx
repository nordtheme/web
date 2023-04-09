/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * The container for the read-only input component of the setup section.
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
