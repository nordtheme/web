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

import { Content } from "containers/core/Section";
import { renderWithTheme } from "nord-docs-test-utils";

describe("theme styles", () => {
  test("has top and bottom padding", () => {
    const { container } = renderWithTheme(<Content>Nord</Content>);
    const paddingTop = stripUnit(getComputedStyle(container.firstChild).paddingTop);
    const paddingBottom = stripUnit(getComputedStyle(container.firstChild).paddingBottom);

    expect(paddingTop).toBeGreaterThan(0);
    expect(paddingBottom).toBeGreaterThan(0);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("adjusts top and bottom padding to passed props", () => {
    const { container } = renderWithTheme(<Content compact>Nord</Content>);
    const paddingTop = stripUnit(getComputedStyle(container.firstChild).paddingTop);
    const paddingBottom = stripUnit(getComputedStyle(container.firstChild).paddingBottom);

    expect(paddingTop).toBeFalsy();
    expect(paddingBottom).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
