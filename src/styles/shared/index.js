/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { transitionThemedModeSwitch } from "./motion/transition";
import {
  dropShadowColorAmbientLight,
  dropShadowColorDirectLight,
  mixinDropShadowAmbientLight,
  mixinDropShadowAmbientLightHover,
  mixinDropShadowDirectLight,
  mixinDropShadowDirectLightHover,
} from "./colors/shadow";

/**
 * Provides shared theme mode styles for all components.
 * @since 0.10.0
 */
export {
  dropShadowColorAmbientLight,
  dropShadowColorDirectLight,
  mixinDropShadowAmbientLight,
  mixinDropShadowAmbientLightHover,
  mixinDropShadowDirectLight,
  mixinDropShadowDirectLightHover,
  transitionThemedModeSwitch,
};
