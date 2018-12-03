/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides a shorthand function to define styles based on the global theme mode(s).
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.2.0
 */

import styledTheming from "styled-theming";

import { THEME_KEY_MODE } from "../constants";

/**
 * Shorthand function to define styles based on the global theme mode(s).
 *
 * @method themedMode
 * @param {object} modeStyles The global theme mode style(s).
 * @return {function} The styles as interpolated function for usage in "styled-components" scope.
 * @see https://github.com/styled-components/styled-theming#themename-values
 */
const themedMode = modeStyles => styledTheming(THEME_KEY_MODE, modeStyles);

export default themedMode;
