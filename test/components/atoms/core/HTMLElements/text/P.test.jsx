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
import { P } from "atoms/core/HTMLElements";

describe("theme styles", () => {
  test("matches the snapshot", () => {
    const { container } = renderWithTheme(<P>Nord</P>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("has no top margin", () => {
    const { container } = renderWithTheme(<P>Nord</P>);
    expect(container.firstChild).toHaveStyleRule("margin-top", "0");
  });
});
