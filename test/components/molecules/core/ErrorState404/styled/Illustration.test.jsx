/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import { waitForElement } from "@testing-library/react";

import { renderWithTheme } from "nord-docs-test-utils";
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
