/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";

import { SectionLanding } from "organisms/page/404";
import { renderWithTheme } from "nord-docs-test-utils";

describe("rendering", () => {
  test("renders and is visible", () => {
    const { container } = renderWithTheme(<SectionLanding />);
    expect(container.firstChild).toBeVisible();
  });
});
