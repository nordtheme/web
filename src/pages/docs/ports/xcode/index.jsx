/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import { DocsPage } from "organisms/page/docs";
import { SectionContents, SectionHero } from "organisms/page/docs/ports/xcode";

/**
 * The component that represents the docs page of the "Nord Xcode" port project.
 * @since 0.22.0
 */
const XcodeDocs = ({ location: { pathname } }) => (
  <BaseLayout headerVariant="tertiary" pathName={pathname}>
    <DocsPage>
      <SectionHero />
      <SectionContents />
    </DocsPage>
  </BaseLayout>
);

XcodeDocs.propTypes = locationPropTypes;

export default XcodeDocs;
