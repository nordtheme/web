/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import { useSpring } from "react-spring";

const calcWindowDimensions = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

/**
 * A hook that provides calculated spring-physic values based on the current window dimensions.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
export default function useFloatingLogos() {
  const [{ xy }, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 800, friction: 140 }
  }));

  function calcFloatingLogos(x, y) {
    return set({ xy: calcWindowDimensions(x, y) });
  }

  return { transformLogoLayer: xy.interpolate, calcFloatingLogos };
}
