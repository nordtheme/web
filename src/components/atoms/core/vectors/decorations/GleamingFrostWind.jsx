/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { rgba } from "polished";

import { nord } from "styles/theme";

const GLEAM_GRADIENT_ID = "frost-wind-gleam-gradient";

/**
 * An SVG vector component that renders an animated, gleaming frost wind.
 * @since 0.6.0
 */
const GleamingFrostWind = (props) => (
  <svg {...props} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <linearGradient id={GLEAM_GRADIENT_ID} x2="100%" y1="25%" y2="25%">
      <stop offset="0%" stopColor={rgba(nord.nord8, 0.9)}>
        <animate
          attributeName="stop-color"
          dur="4s"
          repeatCount="indefinite"
          values={`${rgba(nord.nord7, 0.9)}; ${rgba(nord.nord8, 0.9)}; ${rgba(nord.nord10, 0.9)}`}
        />
      </stop>
      <stop offset="30%" stopColor={rgba(nord.nord9, 0.9)}>
        <animate
          attributeName="stop-color"
          dur="4s"
          repeatCount="indefinite"
          values={`${rgba(nord.nord8, 0.9)}; ${rgba(nord.nord9, 0.9)}; ${rgba(nord.nord8, 0.9)}`}
        />
      </stop>
      <stop offset="45%" stopColor={rgba(nord.nord10, 0.9)}>
        <animate
          attributeName="stop-color"
          dur="4s"
          repeatCount="indefinite"
          values={`${rgba(nord.nord9, 0.9)}; ${rgba(nord.nord10, 0.9)}; ${rgba(nord.nord9, 0.9)}`}
        />
      </stop>
      <stop offset="100%" stopColor={rgba(nord.nord7, 0.9)} />
    </linearGradient>
    <path
      d="M250 40h-93c-11.046 0-20-8.954-20-20s8.954-20 20-20h93c11.046 0 20 8.954 20 20s-8.954 20-20 20zm206 19c0-32.533-26.468-59-59-59h-67c-11.046 0-20 8.954-20 20s8.954 20 20 20h67c10.477 0 19 8.523 19 19s-8.523 19-19 19h-31c-11.046 0-20 8.954-20 20s8.954 20 20 20h31c32.532 0 59-26.467 59-59zm14 117c0-11.046-8.954-20-20-20H116c-10.477 0-19-8.523-19-19s8.523-19 19-19h169c11.046 0 20-8.954 20-20s-8.954-20-20-20H116c-32.532 0-59 26.467-59 59s26.468 59 59 59h334c11.046 0 20-8.954 20-20zm-135 79c0-11.046-8.954-20-20-20H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h295c11.046 0 20-8.954 20-20zm177 39.5c0-32.809-26.691-59.5-59.5-59.5H395c-11.046 0-20 8.954-20 20s8.954 20 20 20h57.5c10.752 0 19.5 8.748 19.5 19.5s-8.748 19.5-19.5 19.5H333c-11.046 0-20 8.954-20 20s8.954 20 20 20h119.5c32.809 0 59.5-26.691 59.5-59.5zM185 413c0-11.046-8.954-20-20-20H92.5c-10.752 0-19.5-8.748-19.5-19.5S81.748 354 92.5 354H253c11.046 0 20-8.954 20-20s-8.954-20-20-20H92.5C59.691 314 33 340.691 33 373.5S59.691 433 92.5 433H165c11.046 0 20-8.954 20-20zm308 0c0-11.046-8.954-20-20-20H245c-11.046 0-20 8.954-20 20s8.954 20 20 20h228c11.046 0 20-8.954 20-20zm-84 79c0-11.046-8.954-20-20-20h-89c-11.046 0-20 8.954-20 20s8.954 20 20 20h89c11.046 0 20-8.954 20-20zm-169.005 0c0-11.046-8.954-20-20-20H139c-11.046 0-20 8.954-20 20s8.954 20 20 20h80.995c11.046 0 20-8.954 20-20z"
      fill={`url(#${GLEAM_GRADIENT_ID})`}
    />
  </svg>
);

export default GleamingFrostWind;
