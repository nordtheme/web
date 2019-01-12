/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides shared styles for all page components.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */

import { css } from "styled-components";
import { darken } from "polished";

import { media, nord } from "styles/theme";

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
 * A darkened background color for landing page section components.
 *
 * @since 0.6.0
 */
const darkenedSectionBackgroundColor = darken(0.045, nord.nord0);

export { darkenedSectionBackgroundColor, emptyStateIllustrationStyles, errorState404IllustrationStyles };
