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
import { WaveFooter } from "atoms/core/vectors/divider";
import { Content } from "containers/core/Section";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_DOCS_PORTS_EMACS, ROUTE_PORTS_EMACS } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image } from "atoms/core/mdx-elements";
import { usePortsMetadata } from "hooks";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_EMACS, 5);

/**
 * The component that represents the setup section for the landing page of the "Nord Emacs" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.17.0
 */
const SectionSetup = ({ assets }) => {
  const portMetadata = usePortsMetadata();
  const { gitHubRepositoryUrl } = portMetadata.find(port => port.name === "nord-emacs");

  return (
    <Section id={SECTION_ID} variant="secondary">
      <Content centered decorated>
        <FeatureDuo verticalOnly>
          <Text verticalOnly>
            <Headline>Installation and updates with one command.</Headline>
            <Subline>
              Install and update Nord with Emacs builtin package manager from{" "}
              <Link href="https://melpa.org">MELPA</Link> with one command or simply set it up manually.
            </Subline>
            <Actions>
              <Button to={ROUTE_DOCS_PORTS_EMACS} variant="primary">
                Get Started
              </Button>
              <Button ghost href={gitHubRepositoryUrl} outlined quiet variant="primary">
                GitHub
              </Button>
            </Actions>
          </Text>
          <Visualization>
            <Image
              alt="Screenshot showing Emacs package listing and installation command to setup and update Nord through the builtin package manager"
              dropShadow
              fluid={assets.images["ui-installation-package-manager.png"]}
              rounded
            >
              <span>
                Emacs package listing and installation command to setup and update Nord through the builtin package
                manager.
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
