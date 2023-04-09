/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import Section, { Content } from "containers/core/Section";
import { ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE } from "config/routes/mappings";
import { sectionIdFor } from "utils";

import { Headline, Subline } from "../../../shared";

const SECTION_ID = sectionIdFor(ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE, 0);

/**
 * The component that represents the hero section of the docs page for the "Nord Visual Studio Code" port project.
 * @since 0.15.0
 */
const SectionHero = () => (
  <Section id={SECTION_ID} variant="tertiary">
    <Content centered>
      <Headline>Nord Visual Studio Code</Headline>
      <Subline>
        Documentations to get to know the theme and supported features, how to use the extension, customize it to fit your needs or find solution for possible
        problems.
      </Subline>
    </Content>
  </Section>
);

export default SectionHero;
