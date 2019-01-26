/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

/**
 * A component that represents the logo of a card component.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
