/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * @file Configurations to setup Jest's test framework before each test.
 * @since 0.1.0
 * @see https://jestjs.io/docs/configuration
 * @see https://www.gatsbyjs.com/docs/how-to/testing
 * @see https://github.com/testing-library/jest-dom#custom-matchers
 * @see https://github.com/styled-components/jest-styled-components#tohavestylerule
 * @see https://styled-components.com/docs/tooling#jest-integration
 */

/**
 * Extend the `expect` global with jest-dom's custom matchers.
 * @see https://github.com/testing-library/jest-dom#custom-matchers
 */
import "@testing-library/jest-dom/extend-expect";

/**
 * Add support and utilities for testing styled-components with Jest.
 * @since 0.3.0
 * @see https://github.com/styled-components/jest-styled-components#tohavestylerule
 * @see https://styled-components.com/docs/tooling#jest-integration
 */
import "jest-styled-components";
