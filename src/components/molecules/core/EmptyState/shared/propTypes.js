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

import { illustrationVariants } from "./constants";

const illustrationPropTypes = {
  illustrationStyles: PropTypes.arrayOf(PropTypes.string).isRequired,
  illustrationVariant: PropTypes.oneOf([
    illustrationVariants.IGLOO_FRONT,
    illustrationVariants.IGLOO_HEMISPHERE,
    illustrationVariants.IGLOO_SIDE
  ])
};

const illustrationDefaultProps = {
  illustrationVariant: illustrationVariants.IGLOO_FRONT
};

export { illustrationDefaultProps, illustrationPropTypes };
