/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";

import CoreSection from "containers/core/Section";

/**
 * A main container that applies section specific styles and CSS workarounds.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.6.0
 */
const Section = styled(CoreSection)`
  /* The relative position is necessary for sections that render absolute positioned decorations. */
  position: relative;
  /*
   * Due to a bug in Firefox there is a one pixel gap between the SVG section divider (skewed wave) of the previous
   * section and this section. The workaround moves this section up by the amount of pixels specified by the "gapWidth"
   * prop to ensure the gap is closed. Values larger than one pixel are necessary because the previous section is
   * affected by the same problem and applied the same workaround which results in a gap larger than one pixel between
   * these sections.
   */
  top: ${({ gapWidth }) => gapWidth && `-${gapWidth}px`};
  /* Some sections need to use special background colors to differ from the previous and/or next section. */
  background-color: ${({ bgColor }) => bgColor};
`;

export default Section;
