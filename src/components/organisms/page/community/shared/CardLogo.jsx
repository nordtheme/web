/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * A component that represents the logo of a card component.
 * @since 0.7.0
 */
const CardLogo = styled.div`
  margin: 0 auto;
  margin-bottom: 1em;
  width: 3em;
  svg {
    fill: ${({ logoColor }) => logoColor};
  }
`;

export default CardLogo;
