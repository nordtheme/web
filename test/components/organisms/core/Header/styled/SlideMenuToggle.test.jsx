/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { em } from "polished";

import { renderWithTheme } from "nord-web-test-utils";
import SlideMenuToggle from "organisms/core/Header/styled/SlideMenuToggle";
import { media } from "styles/theme";

describe("theme styles", () => {
  test("has required CSS breakpoints", () => {
    const { container } = renderWithTheme(<SlideMenuToggle />);
    const mediaQuery = `(min-width: ${em(media.breakpoints.tabletPortraitLowerBoundary)})`;

    expect(container.firstChild).toHaveStyleRule("display", "none", {
      media: mediaQuery,
    });
  });
});
