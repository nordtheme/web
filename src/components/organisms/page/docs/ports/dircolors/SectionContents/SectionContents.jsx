/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { WaveFooter } from "atoms/core/vectors/divider";
import Section, { Content } from "containers/core/Section";
import { BookOpen, Zap } from "atoms/core/vectors/icons";
import { ROUTE_DOCS_PORTS_DIRCOLORS } from "config/routes/mappings";
import { topicsGettingStarted, topicsReferences } from "data/components/organisms/page/docs/ports/dircolors/topics";
import { sectionIdFor } from "utils";
import { colors } from "styles/theme";

import { ContentsCard, CardGrid } from "../../../shared";

const SECTION_ID = sectionIdFor(ROUTE_DOCS_PORTS_DIRCOLORS, 1);

/**
 * The component that represents the contents section of the docs page for the "Nord dircolors" port project.
 * @since 0.18.0
 */
const SectionContents = () => (
  <Section id={SECTION_ID} variant="tertiary">
    <Content centered>
      <CardGrid>
        <ContentsCard accentColor={colors.nord8} logoComponent={Zap} svgType="stroke" title="Getting Started" topics={topicsGettingStarted}>
          Learn how to install and activate the theme.
        </ContentsCard>
        <ContentsCard accentColor={colors.nord10} logoComponent={BookOpen} title="References" topics={topicsReferences}>
          Learn about supported file and node types and how to deal with occurring problems.
        </ContentsCard>
      </CardGrid>
    </Content>
    <WaveFooter />
  </Section>
);

export default SectionContents;
