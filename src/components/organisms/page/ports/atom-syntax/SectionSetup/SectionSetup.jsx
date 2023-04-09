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
import { ROUTE_DOCS_PORTS_ATOM_SYNTAX, ROUTE_PORTS_ATOM_SYNTAX } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image } from "atoms/core/mdx-elements";
import { usePortsMetadata } from "hooks";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_ATOM_SYNTAX, 5);

/**
 * The component that represents the setup section for the landing page of the "Nord Atom Syntax" port project.
 * @since 0.19.0
 */
const SectionSetup = ({ assets }) => {
  const portMetadata = usePortsMetadata();
  const { gitHubRepositoryUrl, packageThemeRegistryUrl } = portMetadata.find((port) => port.name === "atom-syntax");

  return (
    <Section id={SECTION_ID} variant="secondary">
      <Content centered decorated>
        <FeatureDuo verticalOnly>
          <Text verticalOnly>
            <Headline>Installation and updates with one click.</Headline>
            <Subline>
              Install Nord from the <Link href={packageThemeRegistryUrl}>official theme package registry</Link> with one click including automatic updates to
              always use the latest Nord version.
            </Subline>
            <Actions>
              <Button to={packageThemeRegistryUrl} variant="primary">
                Install Now
              </Button>
              <Button ghost outlined quiet to={ROUTE_DOCS_PORTS_ATOM_SYNTAX} variant="primary">
                Learn More
              </Button>
              <Button ghost href={gitHubRepositoryUrl} outlined quiet variant="primary">
                GitHub
              </Button>
            </Actions>
          </Text>
          <Visualization>
            <Image alt="Screenshot showing the builtin theme package registry view" dropShadow fluid={assets.images["settings-package-registry.png"]} rounded>
              <span>
                The builtin <Link href="https://atom.io/themes">theme package registry</Link> view.
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
