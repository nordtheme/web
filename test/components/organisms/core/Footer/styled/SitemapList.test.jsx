/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import { em } from "polished";

import { renderWithTheme } from "nord-docs-test-utils";
import { SitemapList } from "organisms/core/Footer/styled";
import { media } from "styles/theme";

describe("theme styles", () => {
  test("has 'start' text alignment for defined CSS breakpoints", () => {
    const mediaQuery = `(min-width: ${em(media.breakpoints.tabletLandscapeLowerBoundary)})`;
    const { container } = renderWithTheme(<SitemapList />);

    expect(container.firstChild).toHaveStyleRule("text-align", "start", {
      media: mediaQuery
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
