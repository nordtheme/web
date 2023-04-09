/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { useSpring } from "react-spring";

const calcWindowDimensions = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

/**
 * A hook that provides calculated spring-physic values based on the current window dimensions.
 * @since 0.9.0
 */
export default function useFloatingLogos() {
  const [{ xy }, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 800, friction: 140 },
  }));

  function calcFloatingLogos(x, y) {
    return set({ xy: calcWindowDimensions(x, y) });
  }

  return { transformLogoLayer: xy.interpolate, calcFloatingLogos };
}
