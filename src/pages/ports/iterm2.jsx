/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import { SectionHero } from "organisms/page/ports/iterm2";

/**
 * The component that represents the landing page of the "Nord iTerm2" port project.
 * @since 0.9.0
 */
const ITerm2 = ({ location: { pathname } }) => (
  <BaseLayout pathName={pathname}>
    <SectionHero />
  </BaseLayout>
);

ITerm2.propTypes = locationPropTypes;

export default ITerm2;
