/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { em } from "polished";

import { renderWithTheme } from "nord-web-test-utils";
import { SocialNetworking } from "organisms/core/Footer/styled";
import { media } from "styles/theme";

describe("theme styles", () => {
  test("sets children element margins for defined CSS breakpoints", () => {
    const mediaQuery = `(min-width: ${em(media.breakpoints.tabletLandscapeLowerBoundary)})`;
    const { container } = renderWithTheme(<SocialNetworking />);

    expect(container.firstChild).toHaveStyleRule("margin", expect.stringContaining("em"), {
      media: mediaQuery,
      modifier: "*",
    });
  });

  test("unsets justified flexbox content for defined CSS breakpoints", () => {
    const mediaQuery = `(min-width: ${em(media.breakpoints.tabletLandscapeLowerBoundary)})`;
    const { container } = renderWithTheme(<SocialNetworking />);

    expect(container.firstChild).toHaveStyleRule("justify-content", "unset", {
      media: mediaQuery,
    });
  });

  test("has flexbox layout styles", () => {
    const { container } = renderWithTheme(<SocialNetworking />);

    expect(container.firstChild).toHaveStyleRule("display", "flex");
    expect(container.firstChild).toHaveStyleRule("justify-content", "space-between");
  });

  test("matches the snapshot", () => {
    const { container } = renderWithTheme(<SocialNetworking />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
