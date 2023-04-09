/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { css } from "styled-components";

/**
 * Generates a tag function for the specified media query that can be used to automatically wrap the tagged template literal in its media query.
 * @param {string} query The string or template literal containing the media query features
 * @returns {function} The tag function for the specified media query
 * @since 0.3.0
 * @see https://styled-components.com/docs/advanced#media-templates
 * @see https://styled-components.com/docs/api#css
 */
const generateMediaQuery =
  (...query) =>
  (...rules) =>
    css`
      @media ${css(...query)} {
        ${css(...rules)};
      }
    `;

export default generateMediaQuery;
