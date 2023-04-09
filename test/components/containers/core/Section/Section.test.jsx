/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React, { Fragment } from "react";

import Section from "containers/core/Section";
import { renderWithTheme } from "nord-web-test-utils";

describe("theme styles", () => {
  test("matches the snapshot", () => {
    const { container } = renderWithTheme(
      <Fragment>
        <Section>Section Base Background</Section>
        <Section variant="primary">Section Primary Background</Section>
        <Section variant="secondary">Section Secondary Background</Section>
      </Fragment>
    );
    expect(container).toMatchSnapshot();
  });
});
