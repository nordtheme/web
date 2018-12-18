/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import { waitForElement } from "react-testing-library";

import { renderWithTheme } from "nord-docs-test-utils";
import Illustration from "molecules/core/EmptyState/styled/Illustration";

const emptyStateIllustrationStylesMock = [];

describe("rendering", () => {
  test("renders the default SVG vector illustration", async () => {
    const { getByTestId } = renderWithTheme(<Illustration illustrationStyles={emptyStateIllustrationStylesMock} />);
    await waitForElement(() => getByTestId("nd-molecules-core-emptystate-styled-svg-igloo-front"));
  });

  test("renders the 'iglooHemisphere' SVG vector illustration", async () => {
    const { getByTestId } = renderWithTheme(
      <Illustration illustrationStyles={emptyStateIllustrationStylesMock} illustrationVariant="iglooHemisphere" />
    );
    await waitForElement(() => getByTestId("nd-molecules-core-emptystate-styled-svg-igloo-hemisphere"));
  });

  test("renders the 'iglooSide' SVG vector illustration", async () => {
    const { getByTestId } = renderWithTheme(
      <Illustration illustrationStyles={emptyStateIllustrationStylesMock} illustrationVariant="iglooSide" />
    );
    await waitForElement(() => getByTestId("nd-molecules-core-emptystate-styled-svg-igloo-side"));
  });
});
