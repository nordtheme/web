/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

import { sitemapCategoryFontSize } from "../styles";

const fontColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: ({ isActiveRouteMatch }) =>
    isActiveRouteMatch ? colors.font.base[MODE_BRIGHT_SNOW_FLURRY] : colors.font.faded[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: ({ isActiveRouteMatch }) =>
    isActiveRouteMatch ? colors.font.base[MODE_DARK_NIGHT_FROST] : colors.font.faded[MODE_DARK_NIGHT_FROST],
});

const borderBottomColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: ({ isActiveRouteMatch }) => (isActiveRouteMatch ? colors.font.base[MODE_BRIGHT_SNOW_FLURRY] : "transparent"),
  [MODE_DARK_NIGHT_FROST]: ({ isActiveRouteMatch }) => (isActiveRouteMatch ? colors.font.base[MODE_DARK_NIGHT_FROST] : "transparent"),
});

/**
 * A container for the heading of a sitemap category.
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
  isActiveRouteMatch: PropTypes.bool,
};

Category.defaultProps = {
  isActiveRouteMatch: false,
};

export default Category;
