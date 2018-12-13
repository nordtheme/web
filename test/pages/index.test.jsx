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

/*
 * This test is disabled because it will be covered by E2E tests with Cypress later on.
 * It is also skipped until due to problems with mocking transitive modules and components.
 */
test.skip("snapshot", () => {
  const { container } = render(<Landing />);
  expect(container).toMatchSnapshot();
});
