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
import { Code } from "atoms/core/html-elements";
import { Image } from "atoms/core/mdx-elements";
import { Content } from "containers/core/Section";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import {
  ROUTE_DOCS_PORTS_DIRCOLORS,
  ROUTE_DOCS_PORTS_DIRCOLORS_INSTALLATION,
  ROUTE_PORTS_DIRCOLORS
} from "config/routes/mappings";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";
import { sectionIdFor } from "utils";
import { usePortsMetadata } from "hooks";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_DIRCOLORS, 0);

/**
 * The component that represents the hero section for the landing page of the "Nord dircolors" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const SectionHero = ({ assets }) => {
  const portMetadata = usePortsMetadata();
  const { gitHubRepositoryUrl, projectUrl } = portMetadata.find(port => port.name === "nord-dircolors");

  return (
    <Section id={SECTION_ID}>
      <Content centered decorated>
        <FeatureDuo verticalOnly>
          <Text verticalOnly>
            <Headline large>Nord dircolors</Headline>
            <Subline>
              An arctic, north-bluish clean and elegant <Link href={projectUrl}>dircolors</Link> theme.
            </Subline>
            <Subline>
              Sets up colorized output for GNU core utils like{" "}
              <Link href="https://en.wikipedia.org/wiki/Ls">
                <Code>ls</Code>
              </Link>{" "}
              and{" "}
              <Link href="https://en.wikipedia.org/wiki/Tree_(command)">
                <Code>tree</Code>
              </Link>{" "}
              as well as other modern apps like{" "}
              <Link href="https://github.com/sharkdp/fd">
                <Code>fd</Code>
              </Link>{" "}
              that respect the <Code>LS_COLORS</Code> environment variable.
            </Subline>
            <Actions>
              <Button to={ROUTE_DOCS_PORTS_DIRCOLORS_INSTALLATION} variant="primary">
                Get Started
              </Button>
              <Button ghost outlined quiet to={ROUTE_DOCS_PORTS_DIRCOLORS} variant="primary">
                Documentation
              </Button>
              <Button ghost href={gitHubRepositoryUrl} outlined quiet variant="primary">
                GitHub
              </Button>
            </Actions>
          </Text>
          <Visualization>
            <Image
              alt="Screenshot showing an overview of various file and node types colorized by Nord"
              dropShadow
              fluid={assets.images["overview.png"]}
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
