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
import { ROUTE_DOCS_PORTS_ATOM_SYNTAX, ROUTE_DOCS_PORTS_ATOM_SYNTAX_INSTALLATION, ROUTE_PORTS_ATOM_SYNTAX, ROUTE_PORTS_ATOM_UI } from "config/routes/mappings";
import { usePortsMetadata } from "hooks";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";
import { sectionIdFor } from "utils";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_ATOM_SYNTAX, 0);

/**
 * The component that represents the hero section for the landing page of the "Nord Atom Syntax" port project.
 * @since 0.9.0
 */
const SectionHero = ({ assets }) => {
  const portMetadata = usePortsMetadata();
  const { gitHubRepositoryUrl, projectUrl } = portMetadata.find((port) => port.name === "atom-syntax");

  return (
    <Section id={SECTION_ID}>
      <Content centered decorated>
        <FeatureDuo verticalOnly>
          <Text verticalOnly>
            <Headline large>Nord Atom Syntax</Headline>
            <Subline>
              An arctic, north-bluish clean and elegant <Link href={projectUrl}>Atom</Link> syntax theme.
            </Subline>
            <Subline>
              Designed for a optimized fluent and clear workflow matching the <Link to={ROUTE_PORTS_ATOM_UI}>Nord Atom UI</Link> theme.
            </Subline>
            <Actions>
              <Button to={ROUTE_DOCS_PORTS_ATOM_SYNTAX_INSTALLATION} variant="primary">
                Get Started
              </Button>
              <Button ghost outlined quiet to={ROUTE_DOCS_PORTS_ATOM_SYNTAX} variant="primary">
                Documentation
              </Button>
              <Button ghost href={gitHubRepositoryUrl} outlined quiet variant="primary">
                GitHub
              </Button>
            </Actions>
          </Text>
          <Visualization>
            <Image alt="Screenshot showing JSX syntax as part of a React component" dropShadow fluid={assets.images["overview-jsx.png"]} rounded />
          </Visualization>
        </FeatureDuo>
      </Content>
      <WaveDivider />
    </Section>
  );
};

SectionHero.propTypes = usePortsAssetsPropTypes;

export default SectionHero;
