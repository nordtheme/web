/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";

import { renderWithTheme } from "nord-docs-test-utils";
import { Category } from "organisms/core/Footer/styled";

describe("theme styles", () => {
  test("has visible border-bottom when matching the active route", () => {
    const { container } = renderWithTheme(<Category isActiveRouteMatch>Nord</Category>);

    expect(container.firstChild).toHaveStyleRule("border-bottom", expect.not.stringContaining("transparent"));
    expect(container.firstChild).toMatchSnapshot();
  });

  test("has invisible border-bottom when not matching the active route", () => {
    const { container } = renderWithTheme(<Category>Nord</Category>);

    expect(container.firstChild).toHaveStyleRule("border-bottom", expect.stringContaining("transparent"));
    expect(container.firstChild).toMatchSnapshot();
  });
});
