/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * A container for the grid cell that contains social media & networking related components.
 * @since 0.5.0
 */
const SocialNetworking = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.media.tabletLandscape`
    justify-content: unset;

    * {
      margin: 0 0.625em;

      &:last-child {
        margin-right: 0;
      }

      &:first-child {
        margin-left: 0;
      }
    }
  `};
`;

export default SocialNetworking;
