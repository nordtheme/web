/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { render } from "@testing-library/react";

import Root from "containers/core/Root";

const renderWithTheme = (components, options = {}) => render(<Root>{components}</Root>, options);

/**
 * Renders the passed components with the global theme and modes provided through the `Root` core container component.
 * @method renderWithTheme
 * @since 0.3.0
 */
export default renderWithTheme;
