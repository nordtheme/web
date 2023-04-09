/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { colors, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const borderColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.nord6,
  [MODE_DARK_NIGHT_FROST]: colors.nord2,
});

/**
 * Provides shared component styles.
 * @since 0.10.0
 */
/* eslint-disable-next-line import/prefer-default-export */
export { borderColor };
