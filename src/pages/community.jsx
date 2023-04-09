/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import { SectionChat, SectionContent, SectionHero } from "organisms/page/community";

/**
 * The component that represents the community page.
 * @since 0.3.0
 */
const Community = ({ location: { pathname } }) => (
  <BaseLayout pathName={pathname}>
    <SectionHero />
    <SectionChat />
    <SectionContent />
  </BaseLayout>
);

Community.propTypes = locationPropTypes;

export default Community;
