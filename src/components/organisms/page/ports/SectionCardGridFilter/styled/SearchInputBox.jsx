/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * The container for the search/filter input component of the port project card grid.
 * @since 0.9.0
 */
const SearchInputBox = styled.div`
  width: 100%;
  max-width: 16em;
  position: relative;
  margin: 0 auto;
  margin-bottom: 5em;

  ${({ theme }) => theme.media.tabletLandscape`
    max-width: 20em;
  `}
`;

export default SearchInputBox;
