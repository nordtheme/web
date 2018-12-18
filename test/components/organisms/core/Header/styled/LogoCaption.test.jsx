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
import LogoCaption from "organisms/core/Header/styled/LogoCaption";

describe("behavior", () => {
  test("is invisible in pinned Mode", () => {
    const { container } = renderWithTheme(<LogoCaption isPinned />);
    expect(container.firstChild).not.toBeVisible();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("is visible in unpinned Mode", () => {
    const { container } = renderWithTheme(<LogoCaption isPinned={false} />);
    expect(container.firstChild).toBeVisible();
    expect(container.firstChild).toMatchSnapshot();
  });
});
