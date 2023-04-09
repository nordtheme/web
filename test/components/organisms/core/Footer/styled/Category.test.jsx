/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { renderWithTheme } from "nord-web-test-utils";
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
