/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { typography } from "styles/theme";

/**
 * A styled component for the `wrapper` mapping of the supported `MDXProvider` tags.
 * It is used to override global/inherited styles for docs pages and blog posts.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 */
const Wrapper = styled.div`
  font-family: ${typography.typefaces.straight};
`;

export default Wrapper;
