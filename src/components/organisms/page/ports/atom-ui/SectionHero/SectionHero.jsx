/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";

import Button from "atoms/core/Button";
import Link from "atoms/core/Link";
import { Image } from "atoms/core/mdx-elements";
import { Content } from "containers/core/Section";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import {
  ROUTE_PORTS_ATOM_SYNTAX,
  ROUTE_DOCS_PORTS_ATOM_UI,
  ROUTE_DOCS_PORTS_ATOM_UI_INSTALLATION,
  ROUTE_PORTS_ATOM_UI
} from "config/routes/mappings";
import { usePortsMetadata } from "hooks";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";
import { sectionIdFor } from "utils";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_ATOM_UI, 0);

/**
 * The component that represents the hero section for the landing page of the "Nord Atom UI" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.19.0
 */
const SectionHero = ({ assets }) => {
  const portMetadata = usePortsMetadata();
  const { gitHubRepositoryUrl, projectUrl } = portMetadata.find(port => port.name === "nord-atom-ui");

  return (
    <Section id={SECTION_ID}>
      <Content centered decorated>
        <FeatureDuo verticalOnly>
          <Text verticalOnly>
            <Headline large>Nord Atom UI</Headline>
            <Subline>
              An arctic, north-bluish clean and elegant <Link href={projectUrl}>Atom</Link> UI theme.
            </Subline>
            <Subline>
              Designed for a optimized fluent and clear workflow matching the{" "}
              <Link to={ROUTE_PORTS_ATOM_SYNTAX}>Nord Atom Syntax</Link> theme.
            </Subline>
            <Actions>
              <Button to={ROUTE_DOCS_PORTS_ATOM_UI_INSTALLATION} variant="primary">
                Get Started
              </Button>
              <Button ghost outlined quiet to={ROUTE_DOCS_PORTS_ATOM_UI} variant="primary">
                Documentation
              </Button>
              <Button ghost href={gitHubRepositoryUrl} outlined quiet variant="primary">
                GitHub
              </Button>
            </Actions>
          </Text>
          <Visualization>
            <Image
              alt="Screenshot showing Atom with the floating command palette modal overlay with a big font type."
              dropShadow
              fluid={assets.images["overview-command-palette.png"]}
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
