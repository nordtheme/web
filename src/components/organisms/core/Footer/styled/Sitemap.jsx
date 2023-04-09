/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * A container for sitemap components.
 * @since 0.5.0
 */
const Sitemap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  margin-bottom: 1em;

  ${({ theme }) => theme.media.tabletPortrait`
    align-items: unset;
    margin-top: 0;
    margin-bottom: 0;
  `};
`;

export default Sitemap;
