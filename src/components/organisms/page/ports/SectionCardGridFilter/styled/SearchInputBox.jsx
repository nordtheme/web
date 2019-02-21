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
 * The container for the search/filter input component of the port project card grid.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
