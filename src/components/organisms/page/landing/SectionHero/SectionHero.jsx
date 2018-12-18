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
import EmptyState from "molecules/core/EmptyState";

import { emptyStateIllustrationStyles } from "../../shared/styles";

/**
 * The component that represents the hero section of the landing page.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
const SectionHero = () => (
  <Section>
    <Content centered compact>
      <EmptyState
        headline="Oh, there's nothing here yet"
        illustrationStyles={emptyStateIllustrationStyles}
        subline="Please check back later, we're working hard on this page!"
      />
    </Content>
  </Section>
);

export default SectionHero;
