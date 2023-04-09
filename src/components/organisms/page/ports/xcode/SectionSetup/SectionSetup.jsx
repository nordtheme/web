/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import Button from "atoms/core/Button";
import { WaveFooter } from "atoms/core/vectors/divider";
import { Content } from "containers/core/Section";
import FeatureDuo, { Actions, Headline, Subline, Text } from "molecules/page/shared/FeatureDuo";
import { ROUTE_DOCS_PORTS_XCODE, ROUTE_PORTS_XCODE } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { usePortsMetadata } from "hooks";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_XCODE, 3);

/**
 * The component that represents the setup section for the landing page of the "Nord Xcode" port project.
 * @since 0.22.0
 */
const SectionSetup = () => {
  const portMetadata = usePortsMetadata();
  const { gitHubRepositoryUrl } = portMetadata.find((port) => port.name === "xcode");

  return (
    <Section id={SECTION_ID} variant="secondary">
      <Content centered decorated>
        <FeatureDuo verticalOnly>
          <Text verticalOnly>
            <Headline>Installation in some lines of code.</Headline>
            <Subline>Download and install Nord Xcode with a few commands.</Subline>
            <Actions>
              <Button to={ROUTE_DOCS_PORTS_XCODE} variant="primary">
                Get Started
              </Button>
              <Button ghost href={gitHubRepositoryUrl} outlined quiet variant="primary">
                GitHub
              </Button>
            </Actions>
          </Text>
        </FeatureDuo>
      </Content>
      <WaveFooter />
    </Section>
  );
};

SectionSetup.propTypes = usePortsAssetsPropTypes;

export default SectionSetup;
