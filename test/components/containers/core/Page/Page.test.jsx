/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { render } from "@testing-library/react";

import Page from "containers/core/Page";

test("snapshot", () => {
  const { container } = render(<Page />);
  expect(container.firstChild).toMatchSnapshot();
});
