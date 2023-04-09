/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { Content } from "containers/core/Section";
import FeatureDuo, { Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_PORTS_SLACK } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Video } from "atoms/core/mdx-elements";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_SLACK, 1);

/**
 * The component that represents the UI details section for the landing page of the "Nord Slack" port project.
 * @since 0.21.0
 */
const SectionUIDetails = ({ assets }) => (
  <Section id={SECTION_ID} variant="secondary">
    <Content centered>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Headline>Small details with unobtrusive styles.</Headline>
          <Subline>
            The colors are matching Slack&apos;s animation and motion design whilee getting out of your way with a visually attractive appearance.
          </Subline>
        </Text>
        <Visualization>
          <Video
            dropShadow
            fillSize={60}
            loop
            poster={assets.videoPosters["ui-details-sidebar-hover.mp4.png"]}
            rounded
            sources={[assets.videos["ui-details-sidebar-hover.mp4"]]}
          />
        </Visualization>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

SectionUIDetails.propTypes = usePortsAssetsPropTypes;

export default SectionUIDetails;
