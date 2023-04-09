/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { em } from "polished";

import { renderWithTheme } from "nord-web-test-utils";
import { Metadata } from "organisms/core/Footer/styled";
import { media } from "styles/theme";

describe("theme styles", () => {
  const categoryCount = "5";

  test("uses automatic grid column assignment for defined CSS breakpoints", () => {
    const mediaQuery = `(min-width: ${em(media.breakpoints.tabletLandscapeLowerBoundary)})`;
    const { container } = renderWithTheme(<Metadata />);

    expect(container.firstChild).toHaveStyleRule("grid-column", "unset", {
      media: mediaQuery,
    });
  });

  test("spans all grid columns", () => {
    const { container } = renderWithTheme(<Metadata categoryCount={categoryCount} />);

    expect(container.firstChild).toHaveStyleRule("grid-column", expect.stringContaining(categoryCount));
  });

  test("has flexbox column layout styles", () => {
    const { container } = renderWithTheme(<Metadata categoryCount={categoryCount} />);

    expect(container.firstChild).toHaveStyleRule("display", "flex");
    expect(container.firstChild).toHaveStyleRule("flex-direction", "column");
  });

  test("matches the snapshot", () => {
    const { container } = renderWithTheme(<Metadata categoryCount={categoryCount} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
