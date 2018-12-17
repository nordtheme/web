/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React, { Fragment } from "react";

import Section from "containers/core/Section";
import { renderWithTheme } from "nord-docs-test-utils";

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
