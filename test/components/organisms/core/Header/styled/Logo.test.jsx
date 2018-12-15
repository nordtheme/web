/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import { em } from "polished";

import { renderWithTheme } from "nord-docs-test-utils";
import Logo from "organisms/core/Header/styled/Logo";
import { HEADER_BRAND_LOGO_SHRINK_FACTOR, HEADER_HEIGHT, HEADER_HEIGHT_PINNED } from "organisms/core/Header";

describe("theme styles", () => {
  test("adjusts to passed header height in unpinned mode", () => {
    const { container } = renderWithTheme(<Logo size={HEADER_HEIGHT} />);
    const expectedSize = em(HEADER_HEIGHT * HEADER_BRAND_LOGO_SHRINK_FACTOR);

    expect(container.firstChild).toHaveStyleRule("width", expectedSize);
    expect(container.firstChild).toHaveStyleRule("height", expectedSize);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("adjusts to passed header height in pinned mode", () => {
    const { container } = renderWithTheme(<Logo size={HEADER_HEIGHT_PINNED} />);
    const expectedSize = em(HEADER_HEIGHT_PINNED * HEADER_BRAND_LOGO_SHRINK_FACTOR);

    expect(container.firstChild).toHaveStyleRule("width", expectedSize);
    expect(container.firstChild).toHaveStyleRule("height", expectedSize);
    expect(container.firstChild).toMatchSnapshot();
  });
});
