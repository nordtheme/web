/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides all available theme colors.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.2.0
 */

import background from "./background";
import font from "./font";
import nord from "./nord";
import palettes from "./palettes";

const colors = {
  background,
  font,
  ...nord,
  ...palettes
};

export { nord, palettes };
export default colors;
