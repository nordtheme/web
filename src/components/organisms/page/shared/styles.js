/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
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

/**
 * @file Provides shared styles for all page components.
 * @since 0.3.0
 */
export { emptyStateIllustrationStyles, errorState404IllustrationStyles };
