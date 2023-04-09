/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import Button from "atoms/core/Button";
import Link from "atoms/core/Link";
import { Image } from "atoms/core/mdx-elements";
import { Content } from "containers/core/Section";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";
import { usePortsMetadata } from "hooks";
import { sectionIdFor } from "utils";
import { ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE, ROUTE_PORTS_VISUAL_STUDIO_CODE } from "config/routes/mappings";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_VISUAL_STUDIO_CODE, 0);

/**
 * The component that represents the hero section for the landing page of the "Nord Visual Studio Code" port project.
 * @since 0.9.0
 */
const SectionHero = ({ assets }) => {
  const portMetadata = usePortsMetadata();
  const { extensionMarketplaceUrl, gitHubRepositoryUrl, projectUrl } = portMetadata.find((port) => port.name === "visual-studio-code");

  return (
    <Section id={SECTION_ID}>
      <Content centered decorated>
        <FeatureDuo verticalOnly>
          <Text verticalOnly>
            <Headline large>Nord Visual Studio Code</Headline>
            <Subline>
              An arctic, north-bluish clean and elegant <Link href={projectUrl}>Visual Studio Code</Link> theme.
            </Subline>
            <Subline>Designed for a fluent and clear workflow with support for many languages and the workbench UI.</Subline>
            <Actions>
              <Button href={extensionMarketplaceUrl} variant="primary">
                Install Now
              </Button>
              <Button ghost outlined quiet to={ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE} variant="primary">
                Documentation
              </Button>
              <Button ghost href={gitHubRepositoryUrl} outlined quiet variant="primary">
                GitHub
              </Button>
            </Actions>
          </Text>
          <Visualization>
            <Image alt="Screenshot showing JSX syntax as part of a React component" dropShadow fluid={assets.images["ui-overview-jsx.png"]} rounded />
          </Visualization>
        </FeatureDuo>
      </Content>
      <WaveDivider />
    </Section>
  );
};

SectionHero.propTypes = usePortsAssetsPropTypes;

export default SectionHero;
