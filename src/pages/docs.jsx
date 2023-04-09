/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import { DocsPage, SectionContents, SectionHero } from "organisms/page/docs";

/**
 * The component that represents the docs page.
 * @since 0.3.0
 */
const Docs = ({ location: { pathname } }) => (
  <BaseLayout headerVariant="tertiary" pathName={pathname}>
    <DocsPage>
      <SectionHero />
      <SectionContents />
    </DocsPage>
  </BaseLayout>
);

Docs.propTypes = locationPropTypes;

export default Docs;
