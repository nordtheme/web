/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { waitForElement } from "@testing-library/react";

import { renderWithTheme } from "nord-web-test-utils";
import EmptyState from "molecules/core/EmptyState";

const emptyStateIllustrationStylesMock = [];

describe("rendering", () => {
  test("renders the headline and subline", async () => {
    const { getByText } = renderWithTheme(
      <EmptyState headline="The arctic winter" illustrationStyles={emptyStateIllustrationStylesMock} subline="A beautiful sparkly phenomenon!" />
    );

    await waitForElement(() => getByText(/The arctic winter/i));
    await waitForElement(() => getByText(/A beautiful sparkly phenomenon!/i));
  });

  test("renders the illustration", async () => {
    const { getByTestId } = renderWithTheme(
      <EmptyState headline="The arctic winter" illustrationStyles={emptyStateIllustrationStylesMock} subline="A beautiful sparkly phenomenon!" />
    );

    await waitForElement(() => getByTestId("nd-molecules-core-emptystate-styled-svg-igloo-front"));
  });
});
