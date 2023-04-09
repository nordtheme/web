/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import PropTypes from "prop-types";

import { illustrationVariants } from "./constants";

const illustrationPropTypes = {
  illustrationStyles: PropTypes.arrayOf(PropTypes.string).isRequired,
  illustrationVariant: PropTypes.oneOf([illustrationVariants.IGLOO_FRONT, illustrationVariants.IGLOO_HEMISPHERE, illustrationVariants.IGLOO_SIDE]),
};

const illustrationDefaultProps = {
  illustrationVariant: illustrationVariants.IGLOO_FRONT,
};

/**
 * Provides shared prop types.
 * @since 0.9.0
 */
export { illustrationDefaultProps, illustrationPropTypes };
