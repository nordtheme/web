/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as BookOpenSVGFill } from "assets/images/icons/eva-icons/book-open-fill.svg";
import { ReactComponent as BookOpenSVGOutline } from "assets/images/icons/eva-icons/book-open-outline.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const BookOpenIconFill = styled(BookOpenSVGFill)`
  ${themeModeFillColorStyles};
`;

const BookOpenIconOutline = styled(BookOpenSVGOutline)`
  ${themeModeFillColorStyles};
`;

/**
 * The "book open" icon from "Eva Icons" as styled SVG vector graphic component.
 * The "outline" variant can be used by passing the `outlined` boolean prop.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.8.0
 * @see https://akveo.github.io/eva-icons
 */
const BookOpen = ({ className, outlined, svgRef }) =>
  outlined ? <BookOpenIconFill className={className} svgRef={svgRef} /> : <BookOpenIconOutline className={className} svgRef={svgRef} />;

BookOpen.propTypes = iconPropTypes;

BookOpen.defaultProps = iconDefaultProps;

export default BookOpen;
