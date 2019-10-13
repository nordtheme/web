/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
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
