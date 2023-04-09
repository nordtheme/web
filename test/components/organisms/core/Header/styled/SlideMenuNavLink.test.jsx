/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { renderWithTheme } from "nord-web-test-utils";
import SlideMenuNavLink from "organisms/core/Header/styled/SlideMenuNavLink";

describe("theme styles", () => {
  test("matches the snapshot", () => {
    const { container } = renderWithTheme(<SlideMenuNavLink>Nord</SlideMenuNavLink>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
