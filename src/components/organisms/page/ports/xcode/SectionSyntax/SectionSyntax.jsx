/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { Content } from "containers/core/Section";
import FeatureDuo, { Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_PORTS_XCODE } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image } from "atoms/core/mdx-elements";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_XCODE, 1);

/**
 * The component that represents the syntax section for the landing page of the "Nord Xcode" port project.
 * @since 0.22.0
 */
const SectionSyntax = ({ assets }) => (
  <Section id={SECTION_ID} variant="secondary">
    <Content centered>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image
            alt="Screenshot showing highlighting for different syntax types supported by Xcode"
            dropShadow
            fluid={assets.images["editor-syntax_types.png"]}
            rounded
          >
            <span>Highlighting for different syntax types supported by Xcode.</span>
          </Image>
        </Visualization>
        <Text>
          <Headline>Beautiful code to keep focused.</Headline>
          <Subline>The color scheme supports all syntax types available in Xcode.</Subline>
        </Text>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

SectionSyntax.propTypes = usePortsAssetsPropTypes;

export default SectionSyntax;
