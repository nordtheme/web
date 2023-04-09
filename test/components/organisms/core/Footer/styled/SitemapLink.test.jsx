/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { stripUnit } from "polished";

import { renderWithTheme } from "nord-web-test-utils";
import { SitemapLink } from "organisms/core/Footer/styled";

describe("theme styles", () => {
  test("has top and bottom padding", () => {
    const { container } = renderWithTheme(<SitemapLink>Nord</SitemapLink>);

    expect(container.firstChild).toHaveStyleRule("padding", expect.stringContaining("em"));
    expect(container.firstChild).toHaveStyleRule("padding-bottom", "0", {
      modifier: ":last-child",
    });
    expect(container.firstChild).toHaveStyleRule("padding-top", "0", {
      modifier: ":first-child",
    });
  });

  test("has reduced font size", () => {
    const { container } = renderWithTheme(<SitemapLink>Nord</SitemapLink>);
    const fontSize = stripUnit(getComputedStyle(container.firstChild).fontSize);

    expect(fontSize).toBeLessThan(1);
    expect(container.firstChild).toHaveStyleRule("font-size", `${fontSize}em`);
  });

  test("changes color on hover", () => {
    const { container } = renderWithTheme(<SitemapLink>Nord</SitemapLink>);

    expect(container.firstChild).toHaveStyleRule("color", expect.any(String), {
      modifier: ":hover",
    });
  });

  test("matches the snapshot", () => {
    const { container } = renderWithTheme(<SitemapLink>Nord</SitemapLink>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
