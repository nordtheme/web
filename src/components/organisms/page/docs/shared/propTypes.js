/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides shared prop types.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */

import PropTypes from "prop-types";

const cardBasePropTypes = {
  logoComponent: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

const cardIconPropTypes = {
  accentColor: PropTypes.string.isRequired,
  iconComponent: PropTypes.node.isRequired,
  svgType: PropTypes.string.isRequired
};

export { cardBasePropTypes, cardIconPropTypes };
