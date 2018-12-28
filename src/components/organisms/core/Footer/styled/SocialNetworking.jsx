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
 * A container for the grid cell that contains social media & networking related components.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
