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
import {
  SectionCommunity,
  SectionHero,
  SectionNativeColorSwatch,
  SectionPalettesContrast,
  SectionPalettesModularity,
  SectionPorts,
  SectionSyntax
} from "organisms/page/landing";

/**
 * The landing page component representing the root/index of the site.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @version 0.21.0
 * @since 0.1.0
 */
const Landing = ({ location: { pathname } }) => (
  <BaseLayout pathName={pathname}>
    <SectionHero />
    <SectionPalettesModularity />
    <SectionPalettesContrast />
    <SectionPorts />
    <SectionNativeColorSwatch />
    <SectionSyntax />
    <SectionCommunity />
  </BaseLayout>
);

Landing.propTypes = locationPropTypes;

export default Landing;
