/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

import { typography } from "styles/theme";

/**
 * A styled component for the `wrapper` mapping of the supported `MDXProvider` tags.
 * It is used to override global/inherited styles for docs pages and blog posts.
 * @since 0.10.0
 */
const Wrapper = styled.div`
  font-family: ${typography.typefaces.straight};
`;

export default Wrapper;
