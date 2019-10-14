/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file The setup to configure Jest's test framework before each test.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://jestjs.io/docs/en/configuration
 * @see https://www.gatsbyjs.org/docs/testing
 * @see https://github.com/gnapse/jest-dom#custom-matchers
 * @see https://github.com/styled-components/jest-styled-components#tohavestylerule
 * @see https://www.styled-components.com/docs/tooling#jest-integration
 * @since 0.1.0
 */

/*
 * Extend the `expect` global with jest-dom's custom matchers.
 *
 * @see https://github.com/gnapse/jest-dom#custom-matchers
 */
import "@testing-library/jest-dom/extend-expect";

/*
 * Add support and utilities for testing styled-somponents with Jest.
 *
 * @see https://github.com/styled-components/jest-styled-components#tohavestylerule
 * @see https://www.styled-components.com/docs/tooling#jest-integration
 * @since 0.3.0
 */
import "jest-styled-components";
