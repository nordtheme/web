/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * A wrapper for two color palette card components that adjust the layout.
 * @since 0.6.0
 */
const ColorPaletteWrapper = styled.div`
  display: grid;
  grid-row-gap: 4em;
  font-size: 0.8em;

  ${({ theme }) => theme.media.phoneLandscape`
    font-size: inherit;
  `};

  ${({ reverseOffset, theme }) => theme.media.desktop`
    display: flex;
    flex-direction: column;

    > :first-child {
      margin-bottom: 8%;
      margin-left: ${!reverseOffset && "18%"};
      margin-right: ${reverseOffset && "18%"};
    }

    > :last-child {
      margin-top: 8%;
      margin-left: ${reverseOffset && "18%"};
      margin-right: ${!reverseOffset && "18%"};
    }
  `};
`;

export default ColorPaletteWrapper;
