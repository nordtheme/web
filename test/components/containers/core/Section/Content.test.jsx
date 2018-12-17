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
  test("has top and bottom margin", () => {
    const { container } = renderWithTheme(<Content>Nord</Content>);
    const marginTop = stripUnit(getComputedStyle(container.firstChild).marginTop);
    const marginBottom = stripUnit(getComputedStyle(container.firstChild).marginBottom);

    expect(marginTop).toBeGreaterThan(0);
    expect(marginBottom).toBeGreaterThan(0);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("adjusts top and bottom margin to passed props", () => {
    const { container } = renderWithTheme(<Content compact>Nord</Content>);
    const marginTop = stripUnit(getComputedStyle(container.firstChild).marginTop);
    const marginBottom = stripUnit(getComputedStyle(container.firstChild).marginBottom);

    expect(marginTop).toBeFalsy();
    expect(marginBottom).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
