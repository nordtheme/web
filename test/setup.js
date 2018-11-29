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
 * @since 0.1.0
 */

/*
 * Extend the `expect` global with jest-dom's custom matchers.
 *
 * @see https://github.com/gnapse/jest-dom#custom-matchers
 */
import "jest-dom/extend-expect";

/*
 * Automatically execute `afterEach(cleanup)` for each test.
 */
import "react-testing-library/cleanup-after-each";
