/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * A container for sitemap page links.
 * @since 0.5.0
 */
const SitemapList = styled.div`
  text-align: center;

  ${({ theme }) => theme.media.tabletLandscape`
    text-align: start;
  `};
`;

export default SitemapList;
