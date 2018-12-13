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

import Root from "containers/core/Root";

/**
 * Renders the passed components with the global theme and modes provided through the `Root` core container component.
 *
 * @method renderWithTheme
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
const renderWithTheme = components => render(<Root>{components}</Root>);

export default renderWithTheme;
