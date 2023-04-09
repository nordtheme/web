/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import { DocsPage } from "organisms/page/docs";
import { SectionContents, SectionHero } from "organisms/page/docs/ports/jetbrains";

/**
 * The component that represents the docs page of the "Nord JetBrains" port project.
 * @since 0.12.0
 */
const JetBrainsDocs = ({ location: { pathname } }) => (
  <BaseLayout headerVariant="tertiary" pathName={pathname}>
    <DocsPage>
      <SectionHero />
      <SectionContents />
    </DocsPage>
  </BaseLayout>
);

JetBrainsDocs.propTypes = locationPropTypes;

export default JetBrainsDocs;
