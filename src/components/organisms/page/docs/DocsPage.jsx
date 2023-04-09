/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * A content wrapper component that applies page specific styles.
 * @since 0.8.0
 */
const DocsPage = styled.div`
  font-family: ${({ theme }) => theme.typography.typefaces.straight};
`;

export default DocsPage;
