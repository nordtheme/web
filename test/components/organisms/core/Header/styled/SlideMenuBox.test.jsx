/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { em } from "polished";

import { renderWithTheme } from "nord-web-test-utils";
import SlideMenuBox from "organisms/core/Header/styled/SlideMenuBox";
import { HEADER_HEIGHT, HEADER_HEIGHT_PINNED } from "organisms/core/Header";
import { media } from "styles/theme";

describe("theme styles", () => {
  test("has required CSS breakpoints", () => {
    const { container } = renderWithTheme(<SlideMenuBox />);
    const mediaQuery = `(min-width: ${em(media.breakpoints.tabletPortraitLowerBoundary)})`;

    expect(container.firstChild).toHaveStyleRule("display", "none", {
      media: mediaQuery,
    });
  });

  test("has correct top position based on header height in unpinned mode", () => {
    const { container } = renderWithTheme(<SlideMenuBox isPinned={false} />);

    expect(container.firstChild).toHaveStyleRule("top", em(HEADER_HEIGHT));
    expect(container.firstChild).toMatchSnapshot();
  });

  test("has correct top position based on the header height in pinned mode", () => {
    const { container } = renderWithTheme(<SlideMenuBox isPinned />);

    expect(container.firstChild).toHaveStyleRule("top", em(HEADER_HEIGHT_PINNED));
    expect(container.firstChild).toMatchSnapshot();
  });
});
