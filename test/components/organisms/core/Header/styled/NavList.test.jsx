/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { em } from "polished";

import { renderWithTheme } from "nord-web-test-utils";
import NavList from "organisms/core/Header/styled/NavList";
import { media } from "styles/theme";

describe("theme styles", () => {
  test("has required CSS breakpoints", () => {
    const { container } = renderWithTheme(<NavList />);
    const mediaQuery = `(min-width: ${em(media.breakpoints.tabletPortraitLowerBoundary)})`;

    expect(container.firstChild).toHaveStyleRule("display", "none");
    expect(container.firstChild).toHaveStyleRule("display", "flex", {
      media: mediaQuery,
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
