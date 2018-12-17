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
  width: 8em;

  ${media.phonePortrait`
    width: 7em;
  `}
`;

/* eslint-disable-next-line import/prefer-default-export */
export { emptyStateIllustrationStyles };
