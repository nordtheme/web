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
import Header from "organisms/core/Header/styled/Header";
import { HEADER_HEIGHT, HEADER_HEIGHT_PINNED } from "organisms/core/Header";

describe("theme styles", () => {
  test("uses flexbox layout", () => {
    const { container } = renderWithTheme(<Header />);
    expect(container.firstChild).toHaveStyleRule("display", "flex");
  });

  test("has fixed position", () => {
    const { container } = renderWithTheme(<Header />);
    expect(container.firstChild).toHaveStyleRule("position", "fixed");
  });

  test("has correct height in unpinned mode", () => {
    const { container } = renderWithTheme(
      <Header height={HEADER_HEIGHT} heightPinned={HEADER_HEIGHT_PINNED} isPinned={false} />
    );

    expect(container.firstChild).toHaveStyleRule("height", em(HEADER_HEIGHT));
    expect(container.firstChild).toMatchSnapshot();
  });

  test("has correct height in pinned mode", () => {
    const { container } = renderWithTheme(
      <Header height={HEADER_HEIGHT} heightPinned={HEADER_HEIGHT_PINNED} isPinned />
    );

    expect(container.firstChild).toHaveStyleRule("height", em(HEADER_HEIGHT_PINNED));
    expect(container.firstChild).toMatchSnapshot();
  });
});
