/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styledTheming from "styled-theming";

import { THEME_KEY_MODE } from "../constants";

/**
 * Shorthand function to define styles based on the global theme mode(s).
 * @method themedMode
 * @param {object} modeStyles The global theme mode style(s).
 * @return {function} The styles as interpolated function for usage in "styled-components" scope.
 * @see https://github.com/styled-components/styled-theming#themename-values
 */
const themedMode = (modeStyles) => styledTheming(THEME_KEY_MODE, modeStyles);

export default themedMode;
