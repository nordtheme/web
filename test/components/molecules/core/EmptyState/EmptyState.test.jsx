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
import EmptyState from "molecules/core/EmptyState";

const emptyStateIllustrationStylesMock = [];

describe("rendering", () => {
  test("renders the headline and subline", async () => {
    const { getByText } = renderWithTheme(
      <EmptyState
        headline="The arctic winter"
        illustrationStyles={emptyStateIllustrationStylesMock}
        subline="A beautiful sparkly phenomenon!"
      />
    );

    await waitForElement(() => getByText(/The arctic winter/i));
    await waitForElement(() => getByText(/A beautiful sparkly phenomenon!/i));
  });

  test("renders the illustration", async () => {
    const { getByTestId } = renderWithTheme(
      <EmptyState
        headline="The arctic winter"
        illustrationStyles={emptyStateIllustrationStylesMock}
        subline="A beautiful sparkly phenomenon!"
      />
    );

    await waitForElement(() => getByTestId("nd-molecules-core-emptystate-styled-svg-igloo-front"));
  });
});
