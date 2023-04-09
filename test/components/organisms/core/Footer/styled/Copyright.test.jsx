/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { em, stripUnit } from "polished";

import { renderWithTheme } from "nord-web-test-utils";
import { Copyright } from "organisms/core/Footer/styled";
import { media } from "styles/theme";

describe("theme styles", () => {
  test("has required CSS breakpoints", () => {
    const { container } = renderWithTheme(<Copyright />);
    const mediaQuery = `(min-width: ${em(media.breakpoints.tabletLandscapeLowerBoundary)})`;

    expect(container.firstChild).toHaveStyleRule("display", "block", {
      media: mediaQuery,
    });
    expect(container.firstChild).toHaveStyleRule("text-align", "start", {
      media: mediaQuery,
    });
  });

  test("has reduced font size", () => {
    const { container } = renderWithTheme(<Copyright />);
    const fontSize = stripUnit(getComputedStyle(container.firstChild).fontSize);

    expect(fontSize).toBeLessThan(1);
    expect(container.firstChild).toHaveStyleRule("font-size", `${fontSize}em`);
  });

  test("matches the snapshot", () => {
    const { container } = renderWithTheme(<Copyright />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
