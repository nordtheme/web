/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { Content } from "containers/core/Section";
import FeatureDuo, { Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_PORTS_JETBRAINS } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image, Video } from "atoms/core/mdx-elements";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_JETBRAINS, 3);

/**
 * The component that represents the editor details section for the landing page of the "Nord JetBrains" port project.
 * @since 0.12.0
 */
const SectionEditorDetails = ({ assets }) => (
  <Section id={SECTION_ID} variant="secondary">
    <Content centered>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Headline>Small details with unobtrusive styles.</Headline>
          <Subline>
            Popular and common code editor features like search result marker and bracket matching are designed to get out of your way with a visually
            attractive appearance.
          </Subline>
        </Text>
        <Visualization>
          <Video
            dropShadow
            loop
            poster={assets.videoPosters["editor-lazy-element-highlight.mp4.png"]}
            rounded
            sources={[assets.videos["editor-lazy-element-highlight.mp4"]]}
          >
            <span>Lazy code element highlighting.</span>
          </Video>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Video
            dropShadow
            loop
            poster={assets.videoPosters["editor-selection-highlight.mp4.png"]}
            rounded
            sources={[assets.videos["editor-selection-highlight.mp4"]]}
          >
            <span>Code selection in the editor.</span>
          </Video>
        </Visualization>
        <Text>
          <Subline>The discreet visual style for selected code blocks ensures still easily recognizable syntax colors.</Subline>
        </Text>
      </FeatureDuo>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Subline>Well recognizable marker for active and context related search results.</Subline>
        </Text>
        <Visualization>
          <Image
            alt="Screenshot showing the IDE code editor with search result marker"
            dropShadow
            fluid={assets.images["editor-search-highlightning.png"]}
            rounded
          >
            <span>Search result marker in the editor.</span>
          </Image>
        </Visualization>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

SectionEditorDetails.propTypes = usePortsAssetsPropTypes;

export default SectionEditorDetails;
