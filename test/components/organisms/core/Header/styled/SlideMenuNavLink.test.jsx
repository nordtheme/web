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
import SlideMenuNavLink from "organisms/core/Header/styled/SlideMenuNavLink";

describe("theme styles", () => {
  test("matches the snapshot", () => {
    const { container } = renderWithTheme(<SlideMenuNavLink>Nord</SlideMenuNavLink>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
