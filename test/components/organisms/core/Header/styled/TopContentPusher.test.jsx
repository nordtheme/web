/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { em } from "polished";

import { renderWithTheme } from "nord-web-test-utils";
import TopContentPusher from "organisms/core/Header/styled/TopContentPusher";
import { HEADER_HEIGHT, HEADER_HEIGHT_PINNED } from "organisms/core/Header";

describe("theme styles", () => {
  test("has correct height based on header height in unpinned mode", () => {
    const { container } = renderWithTheme(<TopContentPusher height={HEADER_HEIGHT} />);

    expect(container.firstChild).toHaveStyleRule("height", em(HEADER_HEIGHT));
    expect(container.firstChild).toMatchSnapshot();
  });

  test("has correct height based on the header height in pinned mode", () => {
    const { container } = renderWithTheme(<TopContentPusher height={HEADER_HEIGHT_PINNED} />);

    expect(container.firstChild).toHaveStyleRule("height", em(HEADER_HEIGHT_PINNED));
    expect(container.firstChild).toMatchSnapshot();
  });
});
