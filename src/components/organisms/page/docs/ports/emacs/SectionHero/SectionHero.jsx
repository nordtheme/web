/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import Section, { Content } from "containers/core/Section";
import { ROUTE_DOCS_PORTS_EMACS } from "config/routes/mappings";
import { sectionIdFor } from "utils";

import { Headline, Subline } from "../../../shared";

const SECTION_ID = sectionIdFor(ROUTE_DOCS_PORTS_EMACS, 0);

/**
 * The component that represents the hero section of the docs page for the "Nord Emacs" port project.
 * @since 0.17.0
 */
const SectionHero = () => (
  <Section id={SECTION_ID} variant="tertiary">
    <Content centered>
      <Headline>Nord Emacs</Headline>
      <Subline>
        Documentations to get to know the theme, supported features, how to use the package, customize it to fit your needs and find solutions for possible
        problems.
      </Subline>
    </Content>
  </Section>
);

export default SectionHero;
