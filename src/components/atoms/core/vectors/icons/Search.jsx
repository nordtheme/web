/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as SearchSVG } from "assets/images/icons/eva-icons/search.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const SearchIcon = styled(SearchSVG)`
  ${themeModeFillColorStyles};
`;

/**
 * The "search" icon from "Eva Icons" as styled SVG vector graphic component.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.9.0
 * @see https://akveo.github.io/eva-icons
 */
const Search = ({ className, svgRef }) => <SearchIcon className={className} svgRef={svgRef} />;

Search.propTypes = iconPropTypes;

Search.defaultProps = iconDefaultProps;

export default Search;
