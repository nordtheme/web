/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Custom normalizations for browser default CSS styles.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.2.0
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

export default normalize;
