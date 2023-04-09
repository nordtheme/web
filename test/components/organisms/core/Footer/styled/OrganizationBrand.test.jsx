/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { stripUnit } from "polished";

import { renderWithTheme } from "nord-web-test-utils";
import { OrganizationBrand } from "organisms/core/Footer/styled";

describe("theme styles", () => {
  test("has flexbox layout styles", () => {
    const { container } = renderWithTheme(<OrganizationBrand />);

    expect(container.firstChild).toHaveStyleRule("display", "flex");
  });

  test("has bottom margin", () => {
    const { container } = renderWithTheme(<OrganizationBrand />);
    const marginBottom = stripUnit(getComputedStyle(container.firstChild).marginBottom);

    expect(marginBottom).toBeGreaterThan(0);
  });

  test("matches the snapshot", () => {
    const { container } = renderWithTheme(<OrganizationBrand />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
