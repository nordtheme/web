/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";

import { SectionBlogPosts } from "organisms/page/blog";
import { renderWithTheme } from "nord-docs-test-utils";

describe("rendering", () => {
  test("renders and is visible", () => {
    const { container } = renderWithTheme(<SectionBlogPosts />);
    expect(container.firstChild).toBeVisible();
  });
});
