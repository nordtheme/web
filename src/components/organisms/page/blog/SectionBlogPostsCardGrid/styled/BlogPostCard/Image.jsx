/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";
import GatsbyImage from "gatsby-image";

import { BLOG_POST_IMAGE_MIN_HEIGHT } from "config/internal/constants";
import { transitionThemedModeSwitch } from "styles/shared";

/**
 * An styled Gatsby image.
 * @since 0.10.0
 * @see https://www.gatsbyjs.com/docs/how-to/images-and-media
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
