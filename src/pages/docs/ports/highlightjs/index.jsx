/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";

import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import { DocsPage } from "organisms/page/docs";
import { SectionContents, SectionHero } from "organisms/page/docs/ports/highlightjs";

/**
 * The component that represents the docs page of the "Nord dircolors" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.18.0
 */
const HighlightJsDocs = ({ location: { pathname } }) => (
  <BaseLayout headerVariant="tertiary" pathName={pathname}>
    <DocsPage>
      <SectionHero />
      <SectionContents />
    </DocsPage>
  </BaseLayout>
);

HighlightJsDocs.propTypes = locationPropTypes;

export default HighlightJsDocs;
