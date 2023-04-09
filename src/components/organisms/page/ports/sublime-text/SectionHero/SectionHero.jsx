/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import Button from "atoms/core/Button";
import Link from "atoms/core/Link";
import { Image } from "atoms/core/mdx-elements";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { Content } from "containers/core/Section";
import { ROUTE_DOCS_PORTS_SUBLIME_TEXT, ROUTE_PORTS_SUBLIME_TEXT } from "config/routes/mappings";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";
import { usePortsMetadata } from "hooks";
import { sectionIdFor } from "utils";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_SUBLIME_TEXT, 0);

/**
 * The component that represents the hero section for the landing page of the "Nord Sublime Text" port project.
 * @since 0.9.0
 */
const SectionHero = ({ assets }) => {
  const portMetadata = usePortsMetadata();
  const { gitHubRepositoryUrl, packageControlUrl, projectUrl } = portMetadata.find((port) => port.name === "sublime-text");

  return (
    <Section id={SECTION_ID}>
      <Content centered decorated>
        <FeatureDuo verticalOnly>
          <Text verticalOnly>
            <Headline large>Nord Sublime Text</Headline>
            <Subline>
              An arctic, north-bluish clean and elegant <Link href={projectUrl}>Sublime Text</Link> theme.
            </Subline>
            <Subline>Designed for a fluent and clear workflow with support for many languages and third-party syntax plugins.</Subline>
            <Actions>
              <Button href={packageControlUrl} variant="primary">
                Install Now
              </Button>
              <Button ghost outlined quiet to={ROUTE_DOCS_PORTS_SUBLIME_TEXT} variant="primary">
                Documentation
              </Button>
              <Button ghost href={gitHubRepositoryUrl} outlined quiet variant="primary">
                GitHub
              </Button>
            </Actions>
          </Text>
          <Visualization>
            <Image alt="Screenshot showing a Go function" dropShadow fluid={assets.images["editor-overview-go.png"]} rounded />
          </Visualization>
        </FeatureDuo>
      </Content>
      <WaveDivider />
    </Section>
  );
};

SectionHero.propTypes = usePortsAssetsPropTypes;

export default SectionHero;
