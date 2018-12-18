/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import { css } from "styled-components";

import { media } from "styles/theme";

const emptyStateIllustrationStyles = css`
  width: 7em;

  ${media.phoneLandscape`
    width: 8em;
  `}
`;

const errorState404IllustrationStyles = css`
  width: 16em;

  ${media.phoneLandscape`
    width: 20em;
  `}

  ${media.tabletLandscape`
    width: 25em;
  `}

  ${media.desktop`
    width: 30em;
  `}
`;

export { emptyStateIllustrationStyles, errorState404IllustrationStyles };
