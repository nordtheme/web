/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
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
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.8.0
 * @see https://akveo.github.io/eva-icons
 */
const BookOpen = ({ className, outlined, svgRef }) =>
  outlined ? (
    <BookOpenIconFill className={className} svgRef={svgRef} />
  ) : (
    <BookOpenIconOutline className={className} svgRef={svgRef} />
  );

BookOpen.propTypes = iconPropTypes;

BookOpen.defaultProps = iconDefaultProps;

export default BookOpen;
