/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import Button from "atoms/core/Button";
import { WaveFooter } from "atoms/core/vectors/divider";
import { Content } from "containers/core/Section";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_DOCS_PORTS_HIGHLIGHTJS, ROUTE_PORTS_HIGHLIGHTJS } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Code } from "atoms/core/html-elements";
import { usePortsMetadata } from "hooks";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_HIGHLIGHTJS, 2);

/**
 * The component that represents the setup section for the landing page of the "Nord highlight.js" port project.
 * @since 0.23.0
 */
const SectionSetup = () => {
  const portMetadata = usePortsMetadata();
  const { gitHubRepositoryUrl } = portMetadata.find((port) => port.name === "highlightjs");

  return (
    <Section id={SECTION_ID}>
      <Content centered decorated>
        <FeatureDuo verticalOnly>
          <Text verticalOnly>
            <Headline>Installation in one line of code.</Headline>
            <Subline>Use Nord in one line of code added to your site.</Subline>
            <Subline>
              <Code>&#x3C;link href=&#x22;nord.css&#x22; rel=&#x22;stylesheet&#x22; type=&#x22;text/css&#x22; /&#x3E;</Code>
            </Subline>
            <Actions>
              <Button to={ROUTE_DOCS_PORTS_HIGHLIGHTJS} variant="primary">
                Get Started
              </Button>
              <Button ghost href={gitHubRepositoryUrl} outlined quiet variant="primary">
                GitHub
              </Button>
            </Actions>
          </Text>
          <Visualization />
        </FeatureDuo>
      </Content>
      <WaveFooter />
    </Section>
  );
};

SectionSetup.propTypes = usePortsAssetsPropTypes;

export default SectionSetup;
