/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/theme";

/**
 * The Vim logo as SVG vector graphic component.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const Vim = ({ fillColor, svgRef, ...passProps }) => (
  <svg {...passProps} ref={svgRef} viewBox="0 0 46 36.142" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M.823 0L0 .823v1.643l.823.82h2.463v32.035l.822.82h2.464L42.714 2.466V.823L41.891 0H27.106l-.82.823v1.643l.82.82h2.466v1.643L11.501 21.357V3.286h2.463l.822-.82V.823L13.964 0H.823zm25.29 19.714l-1.164.823-.552 1.64.617.823h1.775l1.166-.823.55-1.64-.613-.823m-6.04 4.929l-.495 1.643h1.479l-3.123 8.212h4.929l.606-1.643h-1.426l3.12-8.212m1.971 0l-.575 1.643h1.232l-3.12 8.212h4.188l.575-1.643h-.905l1.728-4.929h3.49l-2.344 6.572h4.109l.656-1.643h-.901l1.725-4.929h3.283l-2.3 6.572h4.307l.754-1.643h-1.15L46 26.286l-1.316-1.643h-1.97l-1.643 1.643h-1.395l-1.398-1.643h-1.562l-1.558 1.643h-1.646l-1.477-1.643"
      fill={fillColor}
    />
  </svg>
);

Vim.propTypes = {
  fillColor: PropTypes.string,
  svgRef: PropTypes.func
};

Vim.defaultProps = {
  fillColor: colors.nord8,
  svgRef: () => {}
};

export default Vim;
