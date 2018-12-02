/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Global CSS styles.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.2.0
 */

import { css } from "styled-components";

import typography from "./typography";

const global = css`
  html {
    font-size: ${typography.sizes.root}px;
  }

  body {
    font-family: ${typography.typefaces.main};
    font-size: ${typography.sizes.msBase}rem;
    font-weight: ${typography.sizes.weight};
    line-height: ${typography.sizes.lineHeight};
    scroll-behavior: smooth;
  }
`;

export default global;
