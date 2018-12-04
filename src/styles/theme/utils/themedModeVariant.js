/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides a shorthand function to define variant styles based on the global theme mode(s).
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.2.0
 */

import styledTheming from "styled-theming";

import { THEME_KEY_MODE } from "../constants";

/**
 * Shorthand function to define variant styles based on the global theme mode(s).
 *
 * @method themedModeVariant
 * @param  {object} modeStyles The global theme mode style(s) for each variant.
 * @param  {string} variantPropName The name of the prop which allows to define variants. Defaults to `variant`.
 * @return {function} The styles as interpolated function for usage in styled-components scope.
 * @see https://github.com/styled-components/styled-theming#themevariantsname-prop-themes
 */
const themedModeVariant = (modeStyles, variantPropName = "variant") =>
  styledTheming.variants(THEME_KEY_MODE, variantPropName, modeStyles);

export default themedModeVariant;
