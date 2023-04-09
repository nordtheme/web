/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { em } from "polished";

import { renderWithTheme } from "nord-web-test-utils";
import { SitemapList } from "organisms/core/Footer/styled";
import { media } from "styles/theme";

describe("theme styles", () => {
  test("has 'start' text alignment for defined CSS breakpoints", () => {
    const mediaQuery = `(min-width: ${em(media.breakpoints.tabletLandscapeLowerBoundary)})`;
    const { container } = renderWithTheme(<SitemapList />);

    expect(container.firstChild).toHaveStyleRule("text-align", "start", {
      media: mediaQuery,
    });
  });

  test("has centered text alignment", () => {
    const { container } = renderWithTheme(<SitemapList />);

    expect(container.firstChild).toHaveStyleRule("text-align", "center");
  });

  test("matches the snapshot", () => {
    const { container } = renderWithTheme(<SitemapList />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
