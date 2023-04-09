/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import Link from "atoms/core/Link";
import { Content } from "containers/core/Section";
import { Image } from "atoms/core/mdx-elements";
import { ROUTE_DOCS_PORTS_VIM, ROUTE_DOCS_PORTS_VIM_INSTALLATION, ROUTE_PORTS_VIM } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";
import Button from "atoms/core/Button";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { usePortsMetadata } from "hooks";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_VIM, 0);

/**
 * The component that represents the hero section for the landing page of the "Nord Vim" port project.
 * @since 0.13.0
 */
const SectionHero = ({ assets }) => {
  const portMetadata = usePortsMetadata();
  const { gitHubRepositoryUrl } = portMetadata.find((port) => port.name === "vim");

  return (
    <Section id={SECTION_ID}>
      <Content centered decorated>
        <FeatureDuo verticalOnly>
          <Text verticalOnly>
            <Headline large>Nord Vim</Headline>
            <Subline>
              An arctic, north-bluish clean and elegant <Link href="https://www.vim.org">Vim</Link> theme.
            </Subline>
            <Subline>
              Build for Vim&apos;s terminal- and GUI mode with <em>true colors</em> and support for many third-party syntax and UI plugins including bundled
              themes for <Link href="https://github.com/itchyny/lightline.vim">lightline.vim</Link> and{" "}
              <Link href="https://github.com/vim-airline/vim-airline">vim-airline</Link>.
            </Subline>
            <Actions>
              <Button to={ROUTE_DOCS_PORTS_VIM_INSTALLATION} variant="primary">
                Get Started
              </Button>
              <Button ghost outlined quiet to={ROUTE_DOCS_PORTS_VIM} variant="primary">
                Documentation
              </Button>
              <Button ghost href={gitHubRepositoryUrl} outlined quiet variant="primary">
                GitHub
              </Button>
            </Actions>
          </Text>
          <Visualization>
            <Image
              alt="Screenshot showing Vim in terminal mode with a Go function to check for magic file header information"
              dropShadow
              fluid={assets.images["overview-go.png"]}
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
