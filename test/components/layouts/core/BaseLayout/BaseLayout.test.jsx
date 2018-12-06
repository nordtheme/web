/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React, { Fragment } from "react";
import { render } from "react-testing-library";

import BaseLayout from "layouts/core/BaseLayout";

test("snapshot", () => {
  const { container } = render(
    <BaseLayout>
      <Fragment />
    </BaseLayout>
  );
  expect(container).toMatchSnapshot();
});
