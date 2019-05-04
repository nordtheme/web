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

import { ReactComponent as QuestionMarkCircleSVGFill } from "assets/images/icons/eva-icons/question-mark-circle-fill.svg";
import { ReactComponent as QuestionMarkCircleSVGOutline } from "assets/images/icons/eva-icons/question-mark-circle-outline.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const QuestionMarkCircleIconFill = styled(QuestionMarkCircleSVGFill)`
  ${themeModeFillColorStyles};
`;

const QuestionMarkCircleIconOutline = styled(QuestionMarkCircleSVGOutline)`
  ${themeModeFillColorStyles};
`;

/**
 * The "question mark circle" icon from "Eva Icons" as styled SVG vector graphic component.
 * The "outline" variant can be used by passing the `outlined` boolean prop.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.12.0
 * @see https://akveo.github.io/eva-icons
 */
const QuestionMarkCircle = ({ className, outlined, svgRef }) =>
  outlined ? (
    <QuestionMarkCircleIconFill className={className} svgRef={svgRef} />
  ) : (
    <QuestionMarkCircleIconOutline className={className} svgRef={svgRef} />
  );

QuestionMarkCircle.propTypes = iconPropTypes;

QuestionMarkCircle.defaultProps = iconDefaultProps;

export default QuestionMarkCircle;
