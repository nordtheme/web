/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */

import { css } from "styled-components";

/**
 * Generates a tag function for the specified media query that can be used to automatically wrap the tagged template
 * literal in its media query.
 *
 * @param {string} query The string or template literal containing the media query features
 * @returns {function} The tag function for the specified media query
 * @see https://www.styled-components.com/docs/advanced#media-templates
 * @see https://www.styled-components.com/docs/api#css
 * @since 0.3.0
 */
const generateMediaQuery = (...query) => (...rules) =>
  css`
    @media ${css(...query)} {
      ${css(...rules)};
    }
  `;

export default generateMediaQuery;
