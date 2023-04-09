/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
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
  SectionSyntax,
} from "organisms/page/landing";

/**
 * The landing page component representing the root/index of the site.
 * @version 0.23.0
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
