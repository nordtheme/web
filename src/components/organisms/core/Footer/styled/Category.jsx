/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

import { sitemapCategoryFontSize } from "../styles";

const fontColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: ({ isActiveRouteMatch }) =>
    isActiveRouteMatch ? colors.font.base[MODE_BRIGHT_SNOW_FLURRY] : colors.font.faded[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: ({ isActiveRouteMatch }) =>
    isActiveRouteMatch ? colors.font.base[MODE_DARK_NIGHT_FROST] : colors.font.faded[MODE_DARK_NIGHT_FROST]
});

const borderBottomColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: ({ isActiveRouteMatch }) =>
    isActiveRouteMatch ? colors.font.base[MODE_BRIGHT_SNOW_FLURRY] : "transparent",
  [MODE_DARK_NIGHT_FROST]: ({ isActiveRouteMatch }) =>
    isActiveRouteMatch ? colors.font.base[MODE_DARK_NIGHT_FROST] : "transparent"
});

/**
 * A container for the heading of a sitemap category.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.5.0
 */
const Category = styled.div`
  align-self: center;
  font-size: ${sitemapCategoryFontSize};
  color: ${fontColor};
  border-bottom: 2px solid ${borderBottomColor};
  transition: border-bottom ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out,
    color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

Category.propTypes = {
  /**
   * Indicates if the category matches the currently active route.
   */
  isActiveRouteMatch: PropTypes.bool
};

Category.defaultProps = {
  isActiveRouteMatch: false
};

export default Category;
