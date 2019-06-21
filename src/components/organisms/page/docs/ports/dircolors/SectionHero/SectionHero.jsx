/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";

import Section, { Content } from "containers/core/Section";
import { ROUTE_DOCS_PORTS_DIRCOLORS } from "config/routes/mappings";
import { sectionIdFor } from "utils";

import { Headline, Subline } from "../../../shared";

const SECTION_ID = sectionIdFor(ROUTE_DOCS_PORTS_DIRCOLORS, 0);

/**
 * The component that represents the hero section of the docs page for the "Nord dircolors" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.18.0
 */
const SectionHero = () => (
  <Section id={SECTION_ID} variant="tertiary">
    <Content centered>
      <Headline>Nord dircolors</Headline>
      <Subline>
        Documentations to get to know the theme, supported features, how to use the theme and find solution for possible
        problems.
      </Subline>
    </Content>
  </Section>
);

export default SectionHero;
