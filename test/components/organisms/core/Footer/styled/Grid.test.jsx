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
import { Grid } from "organisms/core/Footer/styled";
import { media } from "styles/theme";

describe("theme styles", () => {
  test("has grid layout styles for defined CSS breakpoints", () => {
    const categoryCount = "5";
    const mediaQueryTabletPortrait = `(min-width: ${em(media.breakpoints.tabletPortraitLowerBoundary)})`;
    const mediaQueryTabletLandscape = `(min-width: ${em(media.breakpoints.tabletLandscapeLowerBoundary)})`;

    const { container } = renderWithTheme(<Grid categoryCount={categoryCount} />);

    expect(container.firstChild).toHaveStyleRule("display", "grid", {
      media: mediaQueryTabletPortrait
    });

    expect(container.firstChild).toHaveStyleRule("grid-template-columns", expect.stringContaining(categoryCount), {
      media: mediaQueryTabletPortrait
    });

    expect(container.firstChild).toHaveStyleRule("grid-template-rows", expect.stringContaining("auto"), {
      media: mediaQueryTabletPortrait
    });

    expect(container.firstChild).toHaveStyleRule("grid-template-columns", expect.stringContaining("%"), {
      media: mediaQueryTabletLandscape
    });
  });

  test("has flexbox layout styles", () => {
    const { container } = renderWithTheme(<Grid />);
    expect(container.firstChild).toHaveStyleRule("display", "flex");
  });

  test("matches the snapshot", () => {
    const { container } = renderWithTheme(<Grid />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
