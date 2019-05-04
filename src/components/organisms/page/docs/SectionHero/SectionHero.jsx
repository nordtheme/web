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
import { ROUTE_DOCS } from "config/routes/mappings";
import { sectionIdFor } from "utils";

import { Headline, Subline } from "../shared";

const SECTION_ID = sectionIdFor(ROUTE_DOCS, 0);

/**
 * The component that represents the hero section of the docs page.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
const SectionHero = () => (
  <Section id={SECTION_ID} variant="tertiary">
    <Content centered>
      <Headline>Documentation</Headline>
      <Subline>
        Read about major concepts, dive into technical details, adapt design guidelines and learn all about Nord&#x27;s
        port projects.
      </Subline>
    </Content>
  </Section>
);

export default SectionHero;
