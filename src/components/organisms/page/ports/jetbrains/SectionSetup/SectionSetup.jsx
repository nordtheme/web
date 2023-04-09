/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import Button from "atoms/core/Button";
import Link from "atoms/core/Link";
import { WaveFooter } from "atoms/core/vectors/divider";
import { Content } from "containers/core/Section";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_DOCS_PORTS_JETBRAINS, ROUTE_PORTS_JETBRAINS } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image } from "atoms/core/mdx-elements";
import { usePortsMetadata } from "hooks";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_JETBRAINS, 5);

/**
 * The component that represents the hero section for the landing page of the "Nord JetBrains" port project.
 * @since 0.12.0
 */
const SectionSetup = ({ assets }) => {
  const portMetadata = usePortsMetadata();
  const { pluginRepositoryUrl } = portMetadata.find((port) => port.name === "jetbrains");

  return (
    <Section id={SECTION_ID} variant="secondary">
      <Content centered decorated>
        <FeatureDuo verticalOnly>
          <Text verticalOnly>
            <Headline>Installation and updates with one click.</Headline>
            <Subline>
              Install Nord from the <Link href={pluginRepositoryUrl}>official JetBrains Plugin Repository</Link> for all your favorite JetBrain IDEs with one
              click including automatic updates to always use the latest Nord version.
            </Subline>
            <Actions>
              <Button to={pluginRepositoryUrl} variant="primary">
                Get It Now
              </Button>
              <Button ghost outlined quiet to={ROUTE_DOCS_PORTS_JETBRAINS} variant="primary">
                Learn More
              </Button>
            </Actions>
          </Text>
          <Visualization>
            <Image alt="Screenshot showing the builtin IDE plugin marketplace" dropShadow fluid={assets.images["ui-plugins-installed.png"]} rounded>
              <span>JetBrains builtin IDE plugin marketplace.</span>
            </Image>
          </Visualization>
        </FeatureDuo>
      </Content>
      <WaveFooter />
    </Section>
  );
};

SectionSetup.propTypes = usePortsAssetsPropTypes;

export default SectionSetup;
