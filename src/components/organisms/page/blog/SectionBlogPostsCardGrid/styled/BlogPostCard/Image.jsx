/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";
import GatsbyImage from "gatsby-image";

import { BLOG_POST_IMAGE_MIN_HEIGHT } from "config/internal/constants";
import { transitionThemedModeSwitch } from "styles/shared";

/**
 * An styled Gatsby image.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 * @see https://www.gatsbyjs.org/docs/working-with-images
 */
const Image = styled(GatsbyImage)`
  min-height: ${BLOG_POST_IMAGE_MIN_HEIGHT / 2}px;
  max-height: ${BLOG_POST_IMAGE_MIN_HEIGHT / 2}px;
  border-radius: 12px;
  overflow: hidden;
  transition: ${transitionThemedModeSwitch("box-shadow")};
  user-select: none;
  pointer-events: none;
`;

export default Image;
