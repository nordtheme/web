import styled from "styled-components";
import posed from "react-pose";
import { em } from "polished";

import { motion, zIndexFor, Z_INDEX_ELEMENTS } from "styles/theme";
import { HEADER_HEIGHT, HEADER_HEIGHT_PINNED } from "organisms/core/Header";

import { backgroundColorVariants } from "../shared/styles";
import { slideMenuNavigationPoseConfig } from "./poseConfig";

/**
 * A compact responsive menu for small width layouts with a sliding animation starting below the main header container.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
const SlideMenuBox = styled(posed.div(slideMenuNavigationPoseConfig))`
  position: absolute;
  top: ${({ isPinned }) => (isPinned ? em(HEADER_HEIGHT_PINNED) : em(HEADER_HEIGHT))};
  width: 100%;
  background-color: ${({ variant }) => backgroundColorVariants[variant]};
  text-align: center;
  z-index: ${zIndexFor(Z_INDEX_ELEMENTS.HEADER_COMPACT_SLIDE_MENU)};
  overflow-y: auto;
  transition: background-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;

  ${({ theme }) => theme.media.tabletPortrait`
    display: none;
  `};
`;

export default SlideMenuBox;
