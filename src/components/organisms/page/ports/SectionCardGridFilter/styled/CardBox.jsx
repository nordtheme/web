/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";

/**
 * The upper container of a card for the port project logo and name.
 * @since 0.9.0
 */
const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em 0.6em;
  text-align: center;

  svg {
    /* Necessary for Google Chrome, otherwise logos will be rendered with zero sizes. */
    width: 100%;
  }
`;

export default CardBox;
