/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { waitForElement } from "@testing-library/react";

import { renderWithTheme } from "nord-web-test-utils";
import Illustration from "molecules/core/ErrorState404/styled/Illustration";

const errorState404IllustrationStylesMock = [];

describe("rendering", () => {
  test("renders the SVG vector illustration with all fragments", async () => {
    const { getByTestId } = renderWithTheme(<Illustration illustrationStyles={errorState404IllustrationStylesMock} />);

    await waitForElement(() => getByTestId("nd-molecules-core-errorstate404-svg-illustration"));
    await waitForElement(() => getByTestId("nd-molecules-core-errorstate404-svg-illustration-fragment-nightsky"));
    await waitForElement(() => getByTestId("nd-molecules-core-errorstate404-svg-illustration-fragment-cloudtop"));
    await waitForElement(() => getByTestId("nd-molecules-core-errorstate404-svg-illustration-fragment-cloudbottom"));
  });
});
