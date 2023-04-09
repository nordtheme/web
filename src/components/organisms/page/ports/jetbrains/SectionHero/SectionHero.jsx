/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { Content } from "containers/core/Section";
import { Image } from "atoms/core/mdx-elements";
import { ROUTE_DOCS_PORTS_JETBRAINS, ROUTE_PORTS_JETBRAINS } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";
import Button from "atoms/core/Button";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { usePortsMetadata } from "hooks";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_JETBRAINS, 0);

/**
 * The component that represents the hero section for the landing page of the "Nord JetBrains" port project.
 * @since 0.9.0
 */
const SectionHero = ({ assets }) => {
  const portMetadata = usePortsMetadata();
  const { pluginRepositoryUrl } = portMetadata.find((port) => port.name === "jetbrains");

  return (
    <Section id={SECTION_ID}>
      <Content centered decorated>
        <FeatureDuo verticalOnly>
          <Text verticalOnly>
            <Headline large>Nord JetBrains</Headline>
            <Subline>An arctic, north-bluish clean and elegant JetBrains IDE UI and editor color theme.</Subline>
            <Actions>
              <Button href={pluginRepositoryUrl} variant="primary">
                Install
              </Button>
              <Button ghost outlined quiet to={ROUTE_DOCS_PORTS_JETBRAINS} variant="primary">
                Documentation
              </Button>
            </Actions>
          </Text>
          <Visualization>
            <Image
              alt="Screenshot showing the IDE UI and code editor elements with Go functions for a RabbitMQ AMQP client"
              dropShadow
              fluid={assets.images["ui-overview-go.png"]}
              rounded
            />
          </Visualization>
        </FeatureDuo>
      </Content>
      <WaveDivider />
    </Section>
  );
};

SectionHero.propTypes = usePortsAssetsPropTypes;

export default SectionHero;
