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
import { ROUTE_DOCS_PORTS_SUBLIME_TEXT, ROUTE_PORTS_SUBLIME_TEXT } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image } from "atoms/core/mdx-elements";
import { usePortsMetadata } from "hooks";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_SUBLIME_TEXT, 4);

/**
 * The component that represents the setup section for the landing page of the "Nord Sublime Text" port project.
 * @since 0.20.0
 */
const SectionSetup = ({ assets }) => {
  const portMetadata = usePortsMetadata();
  const { gitHubRepositoryUrl, packageControlUrl } = portMetadata.find((port) => port.name === "sublime-text");

  return (
    <Section id={SECTION_ID}>
      <Content centered decorated>
        <FeatureDuo verticalOnly>
          <Text verticalOnly>
            <Headline>Installation and updates with one click.</Headline>
            <Subline>
              Install Nord from the <Link href={packageControlUrl}>package control registry</Link> with one command including automatic updates to always use
              the latest Nord version.
            </Subline>
            <Actions>
              <Button to={packageControlUrl} variant="primary">
                Install Now
              </Button>
              <Button ghost outlined quiet to={ROUTE_DOCS_PORTS_SUBLIME_TEXT} variant="primary">
                Learn More
              </Button>
              <Button ghost href={gitHubRepositoryUrl} outlined quiet variant="primary">
                GitHub
              </Button>
            </Actions>
          </Text>
          <Visualization>
            <Image
              alt="Screenshot showing the package control installation view of the command palette"
              dropShadow
              fluid={assets.images["ui-package-control.png"]}
              rounded
            >
              <span>
                The <Link href="https://packagecontrol.io">package control</Link> installation view.
              </span>
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
