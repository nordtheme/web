/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { renderWithTheme } from "nord-web-test-utils";
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
