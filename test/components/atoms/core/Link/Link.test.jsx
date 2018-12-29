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
