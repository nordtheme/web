/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { waitForElement } from "@testing-library/react";

import { renderWithTheme } from "nord-web-test-utils";
import Illustration from "molecules/core/EmptyState/styled/Illustration";

const emptyStateIllustrationStylesMock = [];

describe("rendering", () => {
  test("renders the default SVG vector illustration", async () => {
    const { getByTestId } = renderWithTheme(<Illustration illustrationStyles={emptyStateIllustrationStylesMock} />);
    await waitForElement(() => getByTestId("nd-molecules-core-emptystate-styled-svg-igloo-front"));
  });

  test("renders the 'iglooHemisphere' SVG vector illustration", async () => {
    const { getByTestId } = renderWithTheme(<Illustration illustrationStyles={emptyStateIllustrationStylesMock} illustrationVariant="iglooHemisphere" />);
    await waitForElement(() => getByTestId("nd-molecules-core-emptystate-styled-svg-igloo-hemisphere"));
  });

  test("renders the 'iglooSide' SVG vector illustration", async () => {
    const { getByTestId } = renderWithTheme(<Illustration illustrationStyles={emptyStateIllustrationStylesMock} illustrationVariant="iglooSide" />);
    await waitForElement(() => getByTestId("nd-molecules-core-emptystate-styled-svg-igloo-side"));
  });
});
