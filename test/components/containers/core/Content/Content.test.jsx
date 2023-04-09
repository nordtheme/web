/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { renderWithTheme } from "nord-web-test-utils";
import Content from "containers/core/Content";

test("snapshot", () => {
  const { container } = renderWithTheme(<Content />);
  expect(container.firstChild).toMatchSnapshot();
});
