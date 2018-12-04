/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides theme font colors.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.2.0
 */

import nord from "./nord";
import { MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "../constants";

const base = {
  [MODE_BRIGHT_SNOW_FLURRY]: nord.nord3,
  [MODE_DARK_NIGHT_FROST]: nord.nord6
};

const font = { base };

export default font;
