/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

const MockedSvg = (props) => <svg {...props} />;

/**
 * A mock for React components loaded from SVG files via SVGR (webpack loader).
 * @since 0.3.0
 * @see https://jestjs.io/docs/manual-mocks
 * @see https://github.com/gregberge/svgr
 */
module.exports = { ReactComponent: MockedSvg };
