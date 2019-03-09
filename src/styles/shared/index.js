/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides shared theme mode styles for all components.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 */

import { transitionThemedModeSwitch } from "./motion/transition";
import {
  dropShadowColorAmbientLight,
  dropShadowColorDirectLight,
  mixinDropShadowAmbientLight,
  mixinDropShadowAmbientLightHover,
  mixinDropShadowDirectLight,
  mixinDropShadowDirectLightHover
} from "./colors/shadow";

export {
  dropShadowColorAmbientLight,
  dropShadowColorDirectLight,
  mixinDropShadowAmbientLight,
  mixinDropShadowAmbientLightHover,
  mixinDropShadowDirectLight,
  mixinDropShadowDirectLightHover,
  transitionThemedModeSwitch
};
