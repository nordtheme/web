/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React, { Fragment } from "react";
import { render } from "@testing-library/react";

import Root from "containers/core/Root";

test("snapshot", () => {
  const { container } = render(
    <Root>
      <Fragment />
    </Root>
  );
  expect(container).toMatchSnapshot();
});
