/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import background from "./background";
import font from "./font";
import nord from "./nord";
import palettes from "./palettes";
import shadow from "./shadow";

const colors = {
  background,
  font,
  shadow,
  ...nord,
  ...palettes,
};

/**
 * Provides all available theme colors.
 * @since 0.2.0
 */
export { nord, palettes };
export default colors;
