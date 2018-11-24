/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import { render } from "react-testing-library";

import Landing from "pages";

test("snapshot", () => {
  const { container } = render(<Landing />);
  expect(container).toMatchSnapshot();
});
