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
import { Content } from "containers/core/Section";
import { Image } from "atoms/core/mdx-elements";
import { ROUTE_DOCS_PORTS_EMACS, ROUTE_DOCS_PORTS_EMACS_INSTALLATION, ROUTE_PORTS_EMACS } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { usePortsMetadata } from "hooks";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_EMACS, 0);

/**
 * The component that represents the hero section for the landing page of the "Nord Emacs" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const SectionHero = ({ assets }) => {
  const portMetadata = usePortsMetadata();
  const { gitHubRepositoryUrl, projectUrl } = portMetadata.find(port => port.name === "nord-emacs");

  return (
    <Section id={SECTION_ID}>
      <Content centered decorated>
        <FeatureDuo verticalOnly>
          <Text verticalOnly>
            <Headline large>Nord Emacs</Headline>
            <Subline>
              An arctic, north-bluish clean and elegant <Link href={projectUrl}>Emacs</Link> theme.
            </Subline>
            <Subline>
              Build for Emacs&apos;s terminal- and GUI mode with <em>true colors</em> and support for many third-party
              syntax and UI plugins.
            </Subline>
            <Actions>
              <Button to={ROUTE_DOCS_PORTS_EMACS_INSTALLATION} variant="primary">
                Get Started
              </Button>
              <Button ghost outlined quiet to={ROUTE_DOCS_PORTS_EMACS} variant="primary">
                Documentation
              </Button>
              <Button ghost href={gitHubRepositoryUrl} outlined quiet variant="primary">
                GitHub
              </Button>
            </Actions>
          </Text>
          <Visualization>
            <Image
              alt="Screenshot showing Emacs in terminal mode with a Go function to check for magic file header information"
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
