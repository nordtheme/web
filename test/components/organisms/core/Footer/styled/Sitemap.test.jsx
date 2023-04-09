/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { stripUnit } from "polished";

import { renderWithTheme } from "nord-web-test-utils";
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
