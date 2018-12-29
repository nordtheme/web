/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import { stripUnit } from "polished";

import { renderWithTheme } from "nord-docs-test-utils";
import { Sitemap } from "organisms/core/Footer/styled";

describe("theme styles", () => {
  test("has top and bottom margin", () => {
    const { container } = renderWithTheme(<Sitemap />);
    const margingTop = stripUnit(getComputedStyle(container.firstChild).marginTop);
    const marginBottom = stripUnit(getComputedStyle(container.firstChild).marginBottom);

    expect(margingTop).toBeGreaterThan(0);
    expect(marginBottom).toBeGreaterThan(0);
  });

  test("has flexbox column layout styles", () => {
    const { container } = renderWithTheme(<Sitemap />);

    expect(container.firstChild).toHaveStyleRule("display", "flex");
    expect(container.firstChild).toHaveStyleRule("flex-direction", "column");
  });

  test("matches the snapshot", () => {
    const { container } = renderWithTheme(<Sitemap />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
