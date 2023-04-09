/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { colors, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const figcaptionFontColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.font.faded[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.font.faded[MODE_DARK_NIGHT_FROST],
});

/**
 * A base HTML component that represents the `<figcaption>` element for a caption or legend describing the rest of the contents of its parent `<figure>`
 * element.
 * @since 0.10.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption
 */
const FigCaption = styled.figcaption`
  color: ${figcaptionFontColor};
  margin-bottom: 6em;
  margin-left: 1em;
  font-size: 0.875em;
`;

export default FigCaption;
