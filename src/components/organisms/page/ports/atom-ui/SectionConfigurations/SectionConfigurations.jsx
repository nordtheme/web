/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import Button from "atoms/core/Button";
import Link from "atoms/core/Link";
import { Content } from "containers/core/Section";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_DOCS_PORTS_ATOM_UI_CONFIGURATION, ROUTE_PORTS_ATOM_UI } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image, Video } from "atoms/core/mdx-elements";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_ATOM_UI, 4);

/**
 * The component that represents the theme configuration section for the landing page of the "Nord Atom UI" port project.
 * @since 0.19.0
 */
const SectionConfigurations = ({ assets }) => (
  <Section id={SECTION_ID}>
    <Content centered>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Headline>Configure it to fit your needs.</Headline>
          <Subline>
            Theme configurations like <Link to={`${ROUTE_DOCS_PORTS_ATOM_UI_CONFIGURATION}#full-width-tabs`}>full-width tabs</Link> or{" "}
            <Link to={`${ROUTE_DOCS_PORTS_ATOM_UI_CONFIGURATION}#darker-form-focus`}>darker form focus effects</Link> allow to customize the theme to match your
            personal preferences.
          </Subline>
          <Actions>
            <Button ghost href={ROUTE_DOCS_PORTS_ATOM_UI_CONFIGURATION} outlined quiet variant="primary">
              Learn More
            </Button>
          </Actions>
        </Text>
        <Visualization>
          <Image
            alt="Screenshot showing Atom with enabled full-width tab configuration"
            dropShadow
            fluid={assets.images["config-full-width-tabs-enabled.png"]}
            rounded
          >
            <span>
              Tabs with enabled <Link to={`${ROUTE_DOCS_PORTS_ATOM_UI_CONFIGURATION}#full-width-tabs`}>full-width</Link>
              configuration.
            </span>
          </Image>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text />
        <Visualization>
          <Image alt="Screenshot showing Atom's default tab style" dropShadow fluid={assets.images["config-full-width-tabs-disabled.png"]} rounded>
            <span>Default tab style.</span>
          </Image>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Video
            dropShadow
            loop
            poster={assets.videoPosters["package-core-find-and-replace.mp4.png"]}
            rounded
            sources={[assets.videos["package-core-find-and-replace.mp4"]]}
          >
            <span>Default and darker form focusing effects.</span>
          </Video>
        </Visualization>
        <Text>
          <Subline>
            Adjust UI elements effects like the <Link to={`${ROUTE_DOCS_PORTS_ATOM_UI_CONFIGURATION}#darker-form-focus`}>focus of forms</Link> to adjust Atoms
            usage experience and appearance.
          </Subline>
        </Text>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

SectionConfigurations.propTypes = usePortsAssetsPropTypes;

export default SectionConfigurations;
