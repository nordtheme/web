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
