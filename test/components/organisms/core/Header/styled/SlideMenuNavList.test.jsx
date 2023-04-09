/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { renderWithTheme } from "nord-web-test-utils";
import SlideMenuNavList from "organisms/core/Header/styled/SlideMenuNavList";

describe("theme styles", () => {
  test("matches the snapshot", () => {
    const { container } = renderWithTheme(<SlideMenuNavList />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
