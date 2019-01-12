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
 * A wrapper for two color palette card components that adjust the layout.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
