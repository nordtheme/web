/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { SectionContents, SectionHero } from "organisms/page/docs/ports/slack";
import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import { DocsPage } from "organisms/page/docs";

/**
 * The component that represents the docs page of the "Nord Slack" port project.
 * @since 0.21.0
 */
const SlackDocs = ({ location: { pathname } }) => (
  <BaseLayout headerVariant="tertiary" pathName={pathname}>
    <DocsPage>
      <SectionHero />
      <SectionContents />
    </DocsPage>
  </BaseLayout>
);

SlackDocs.propTypes = locationPropTypes;

export default SlackDocs;
