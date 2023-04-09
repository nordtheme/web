/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { waitForElement } from "@testing-library/react";

import { renderWithTheme } from "nord-web-test-utils";
import ErrorState404 from "molecules/core/ErrorState404";

const errorState404IllustrationStylesMock = [];

describe("rendering", () => {
  test("renders the headline and subline", async () => {
    const { getByText } = renderWithTheme(
      <ErrorState404 headline="The arctic winter" illustrationStyles={errorState404IllustrationStylesMock} subline="A beautiful sparkly phenomenon!" />
    );

    await waitForElement(() => getByText(/The arctic winter/i));
    await waitForElement(() => getByText(/A beautiful sparkly phenomenon!/i));
  });

  test("renders the illustration", async () => {
    const { getByTestId } = renderWithTheme(
      <ErrorState404 headline="The arctic winter" illustrationStyles={errorState404IllustrationStylesMock} subline="A beautiful sparkly phenomenon!" />
    );

    await waitForElement(() => getByTestId("nd-molecules-core-errorstate404-svg-illustration"));
  });
});
