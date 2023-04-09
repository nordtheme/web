/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";
import posed from "react-pose";
import styled from "styled-components";

import { nord } from "styles/theme";

const POSE_DRAW = "draw";
const POSE_ERASE = "erase";

const transitionSpringEaseInQuad = {
  type: "tween",
  /**
   * The `ease-in-quad` transition easing values.
   * @see https://easings.net/#easeInQuad
   */
  ease: [0.55, 0.085, 0.68, 0.53],
  duration: 1000,
};

const poseConfig = {
  [POSE_DRAW]: {
    pathLength: 100,
    transition: { pathLength: { ...transitionSpringEaseInQuad } },
  },
  [POSE_ERASE]: {
    pathLength: 0,
    transition: { pathLength: { ...transitionSpringEaseInQuad } },
  },
  passive: {
    strokeLinecap: ["pathLength", (v) => (v === 0 ? "butt" : "round")],
  },
};

const Svg = styled(posed.svg())`
  ${({ theme }) => theme.media.tabletLandscape`
    max-width: 70%;
  `};
`;

const CodeLine = posed.path(poseConfig);

/**
 * An SVG vector component that renders an editor window with animated code lines.
 * @since 0.6.0
 */
const CodeSyntaxLines = ({ pose, ...passProps }) => (
  <Svg pose={pose} viewBox="0 0 241.064 336.69" xmlns="http://www.w3.org/2000/svg" {...passProps}>
    <path d="M0 8c0-4.4 3.6-8 8-8h225.064c4.4 0 8 3.6 8 8v320.69c0 4.4-3.6 8-8 8H8c-4.4 0-8-3.6-8-8V8z" fill={nord.nord1} />
    <g fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5">
      <CodeLine d="M17.603 21.61H133.32m23.483 289.185h15.674m6.716 0h19.387" stroke={nord.nord3} />
      <CodeLine d="M17.603 32.478h37.08M29.269 256.514h35.579" stroke={nord.nord12} />
      <CodeLine
        d="M67.161 32.478h63.238M90.971 54.185h20.369M156.803 97.6h15.674m-51.443 21.707h38.773m-68.836 10.867h63.975m-29.052 54.268h51.797"
        stroke={nord.nord6}
      />
      <CodeLine d="M90.971 217.004h57.45" stroke={nord.nord4} />
      <CodeLine
        d="M90.971 227.871h31.428m-55.238 17.803h35.087m-14.854 10.84h59.797m-56.22 10.867h39.757m-4.834 10.84h51.797m-86.72 32.574h57.45"
        stroke={nord.nord6}
      />
      <CodeLine
        d="M139.41 32.478h30.199m11.468 0h40.767m-100.81 21.707h38.773m36.835 0h25.202M90.971 65.024h34.896M90.971 97.6h20.369m67.853 0h19.387m-45.6 10.867h34.923m-20.341 10.84h20.341"
        stroke={nord.nord4}
      />
      <CodeLine d="M196.642 119.307h25.202" stroke={nord.nord6} />
      <CodeLine d="M162.701 130.174h35.879m-87.348 21.707h17.721m-37.982 21.708h39.757m-17.449 21.708h25.23m14.471 32.574h34.923" stroke={nord.nord4} />
      <CodeLine d="M179.193 217.004h19.387" stroke={nord.nord6} />
      <CodeLine d="M221.844 245.674h-81.423m64.002 21.707h17.421m-130.873 10.84h27.141m-4.833 10.868h25.23" stroke={nord.nord4} />
      <CodeLine d="M152.98 321.663h34.923" stroke={nord.nord6} />
      <CodeLine d="M90.971 321.663h31.428" stroke={nord.nord4} />
      <CodeLine d="M17.603 43.317H77.4M17.603 162.721H77.4" stroke={nord.nord10} />
      <CodeLine d="M133.621 65.024h44.111m6.54 0h13.161M90.971 184.442h27.141m66.16 93.779h13.161" stroke={nord.nord14} />
      <CodeLine
        d="M167.562 54.185h20.341m-74.624 21.707h25.23m-71.348 75.989h35.087m38.173 0h56.356m-12.505 32.561h13.161m-53.327 10.855h46.965m-50.65 72.084h29.543"
        stroke={nord.nord8}
      />
      <CodeLine d="M87.394 162.721h35.579" stroke={nord.nord3} />
      <CodeLine
        d="M87.394 43.317h35.579M45.427 54.185h34.895M45.427 65.024h34.895M69.646 75.892h33.939M45.427 97.6h34.895m-34.895 10.867h34.895m-34.895 10.84h34.895m-34.895 10.867h34.895m-62.719 21.707h37.08m-9.256 21.708h34.895m-34.895 10.853h34.895m-10.676 10.855h33.939m-58.158 21.707h34.895m-34.895 10.867h34.895m-62.719 17.803h37.08m102.12-28.67h15.674m-127.05 50.377h34.895m-34.895 10.84h34.895m-10.676 10.868h33.939m-58.158 21.706h34.895m-34.895 10.868h34.895m49.068 0h14.853"
        stroke={nord.nord9}
      />
      <CodeLine
        d="M121.034 97.6h29.817m-59.88 10.867h31.428m18.022 65.122h29.543m-40.574 54.282h14.853m-33.011 17.803h17.721m48.766 21.707h17.966"
        stroke={nord.nord7}
      />
      <CodeLine d="M90.971 119.307h20.369" stroke={nord.nord4} />
      <CodeLine d="M129.39 108.467h14.853" stroke={nord.nord9} />
      <CodeLine d="M198.061 195.297h14.035" stroke={nord.nord6} />
    </g>
  </Svg>
);

CodeSyntaxLines.propTypes = {
  pose: PropTypes.oneOf([POSE_DRAW, POSE_ERASE]).isRequired,
};

export { POSE_DRAW, POSE_ERASE };
export default CodeSyntaxLines;
