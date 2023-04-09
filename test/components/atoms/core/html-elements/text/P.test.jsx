/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { renderWithTheme } from "nord-web-test-utils";
import { P } from "atoms/core/html-elements";

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
