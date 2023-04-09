/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { css } from "styled-components";

const normalize = css`
  nav ol,
  nav ul {
    /* Don't decorate list items. */
    list-style: none;
  }

  textarea {
    /* Only allow veritcal resizing to prevent layout shifting. */
    resize: vertical;
  }
`;

/**
 * Custom normalizations for browser default CSS styles.
 * @since 0.2.0
 */
export default normalize;
