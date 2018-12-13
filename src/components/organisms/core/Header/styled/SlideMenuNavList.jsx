/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import { ms } from "styles/theme";

/**
 * A flexbox list for slide menu navigation links with dynamic spacing.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
const SlideMenuNavList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: ${ms(1)};

  * {
    margin: 1em;
  }
`;

export default SlideMenuNavList;
