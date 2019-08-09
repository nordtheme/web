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
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_DOCS_PORTS_SLACK, ROUTE_DOCS_PORTS_SLACK_INSTALLATION, ROUTE_PORTS_SLACK } from "config/routes/mappings";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";
import { usePortsMetadata } from "hooks";
import { sectionIdFor } from "utils";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_SLACK, 0);

/**
 * The component that represents the hero section for the landing page of the "Nord Slack" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const SectionHero = ({ assets }) => {
  const portMetadata = usePortsMetadata();
  const { gitHubRepositoryUrl, projectUrl } = portMetadata.find(port => port.name === "nord-slack");

  return (
    <Section id={SECTION_ID}>
      <Content centered decorated>
        <FeatureDuo verticalOnly>
          <Text verticalOnly>
            <Headline large>Nord Slack</Headline>
            <Subline>
              An arctic, north-bluish clean and elegant <Link href={projectUrl}>Slack</Link> theme.
            </Subline>
            <Subline>Designed for a fluent and clear workflow.</Subline>
            <Actions>
              <Button to={ROUTE_DOCS_PORTS_SLACK_INSTALLATION} variant="primary">
                Install Now
              </Button>
              <Button ghost outlined quiet to={ROUTE_DOCS_PORTS_SLACK} variant="primary">
                Documentation
              </Button>
              <Button ghost href={gitHubRepositoryUrl} outlined quiet variant="primary">
                GitHub
              </Button>
            </Actions>
          </Text>
          <Visualization>
            <Image
              alt="Screenshot showing an overview of the Slack desktop app with the Nord theme applied to the sidebar."
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
