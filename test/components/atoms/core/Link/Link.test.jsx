/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { renderWithTheme } from "nord-web-test-utils";
import Link from "atoms/core/Link";

describe("theme styles", () => {
  test("matches the snapshot with default variant", () => {
    const { container } = renderWithTheme(<Link>Nord</Link>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("matches the snapshot with `calmly` variant", () => {
    const { container } = renderWithTheme(<Link variant="calmly">Nord</Link>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("matches the snapshot with `decent` variant", () => {
    const { container } = renderWithTheme(<Link variant="decent">Nord</Link>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("matches the snapshot with `minimal` variant", () => {
    const { container } = renderWithTheme(<Link variant="minimal">Nord</Link>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
