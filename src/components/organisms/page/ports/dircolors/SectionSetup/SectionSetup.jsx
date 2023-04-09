/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import Button from "atoms/core/Button";
import { WaveFooter } from "atoms/core/vectors/divider";
import { Content } from "containers/core/Section";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_DOCS_PORTS_DIRCOLORS, ROUTE_PORTS_DIRCOLORS } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image } from "atoms/core/mdx-elements";
import { usePortsMetadata } from "hooks";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_DIRCOLORS, 2);

/**
 * The component that represents the setup section for the landing page of the "Nord dircolors" port project.
 * @since 0.18.0
 */
const SectionSetup = ({ assets }) => {
  const portMetadata = usePortsMetadata();
  const { gitHubRepositoryUrl } = portMetadata.find((port) => port.name === "dircolors");

  return (
    <Section id={SECTION_ID}>
      <Content centered decorated>
        <FeatureDuo verticalOnly>
          <Text verticalOnly>
            <Headline>Installation in one line of code.</Headline>
            <Subline>Download and install Nord in one line of code added to your shell configuration file.</Subline>
            <Actions>
              <Button to={ROUTE_DOCS_PORTS_DIRCOLORS} variant="primary">
                Get Started
              </Button>
              <Button ghost href={gitHubRepositoryUrl} outlined quiet variant="primary">
                GitHub
              </Button>
            </Actions>
          </Text>
          <Visualization>
            <Image
              alt="Screenshot showing an example of a shell configuration file to load Nord through dircolors"
              dropShadow
              fluid={assets.images["installation-shell-rc.png"]}
              rounded
            />
          </Visualization>
        </FeatureDuo>
      </Content>
      <WaveFooter />
    </Section>
  );
};

SectionSetup.propTypes = usePortsAssetsPropTypes;

export default SectionSetup;
