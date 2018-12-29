/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import { em, stripUnit } from "polished";

import { renderWithTheme } from "nord-docs-test-utils";
import { SitemapCategory } from "organisms/core/Footer/styled";
import { media } from "styles/theme";

describe("theme styles", () => {
  test("resets width for defined CSS breakpoints", () => {
    const mediaQuery = `(min-width: ${em(media.breakpoints.tabletPortraitLowerBoundary)})`;
    const { container } = renderWithTheme(<SitemapCategory />);

    expect(container.firstChild).toHaveStyleRule("width", "unset", {
      media: mediaQuery
    });
  });

  test("resets justified flexbox content for defined CSS breakpoints", () => {
    const mediaQuery = `(min-width: ${em(media.breakpoints.tabletLandscapeLowerBoundary)})`;
    const { container } = renderWithTheme(<SitemapCategory />);

    expect(container.firstChild).toHaveStyleRule("justify-content", "unset", {
      media: mediaQuery
    });
  });

  test("has centered flexbox content layout", () => {
    const { container } = renderWithTheme(<SitemapCategory />);

    expect(container.firstChild).toHaveStyleRule("display", "flex");
    expect(container.firstChild).toHaveStyleRule("justify-content", "center");
  });

  test("has visible border-bottom", () => {
    const { container } = renderWithTheme(<SitemapCategory />);

    expect(container.firstChild).toHaveStyleRule("border-bottom", expect.not.stringContaining("transparent"));
  });

  test("has bottom margin", () => {
    const { container } = renderWithTheme(<SitemapCategory />);
    const marginBottom = stripUnit(getComputedStyle(container.firstChild).marginBottom);

    expect(marginBottom).toBeGreaterThan(0);
  });

  test("has reduced width", () => {
    const { container } = renderWithTheme(<SitemapCategory />);

    expect(container.firstChild).toHaveStyleRule("width", expect.any(String));
  });

  test("has disabled user selection", () => {
    const { container } = renderWithTheme(<SitemapCategory />);

    expect(container.firstChild).toHaveStyleRule("user-select", "none");
  });

  test("matches the snapshot", () => {
    const { container } = renderWithTheme(<SitemapCategory />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
