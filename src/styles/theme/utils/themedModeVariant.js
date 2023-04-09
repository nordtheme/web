/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styledTheming from "styled-theming";

import { THEME_KEY_MODE } from "../constants";

/**
 * Shorthand function to define variant styles based on the global theme mode(s).
 * @method themedModeVariant
 * @param  {object} modeStyles The global theme mode style(s) for each variant.
 * @param  {string} variantPropName The name of the prop which allows to define variants. Defaults to `variant`.
 * @return {function} The styles as interpolated function for usage in styled-components scope.
 * @see https://github.com/styled-components/styled-theming#themevariantsname-prop-themes
 */
const themedModeVariant = (modeStyles, variantPropName = "variant") => styledTheming.variants(THEME_KEY_MODE, variantPropName, modeStyles);

export default themedModeVariant;
