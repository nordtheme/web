/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { colors, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const baseBackgroundColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.background.base[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.background.base[MODE_DARK_NIGHT_FROST],
});

const primaryBackgroundColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.background.sectioning.primary[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.background.sectioning.primary[MODE_DARK_NIGHT_FROST],
});

const secondaryBackgroundColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.background.sectioning.secondary[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.background.sectioning.secondary[MODE_DARK_NIGHT_FROST],
});

const tertiaryBackgroundColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.background.sectioning.tertiary[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.background.sectioning.tertiary[MODE_DARK_NIGHT_FROST],
});

/**
 * Provides shared container component styles.
 * @since 0.3.0
 */
export { baseBackgroundColor, primaryBackgroundColor, secondaryBackgroundColor, tertiaryBackgroundColor };
