/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";

import Link from "atoms/core/Link";
import { Content } from "containers/core/Section";
import FeatureDuo, { Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_PORTS_ATOM_UI } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image, Video } from "atoms/core/mdx-elements";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_ATOM_UI, 2);

/**
 * The component that represents the UI elements section for the landing page of the "Nord Atom UI" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.19.0
 */
const SectionUIElements = ({ assets }) => (
  <Section id={SECTION_ID}>
    <Content centered>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Headline>Uniform design with beautiful UI elements.</Headline>
          <Subline>
            The themed UI elements provide a fluid and unobtrusive transition from the code editor to the IDE.
          </Subline>
        </Text>
        <Visualization>
          <Image
            alt="Screenshot showing the floating fuzzy finder modal"
            dropShadow
            fluid={assets.images["package-core-fuzzy-finder.png"]}
            rounded
          >
            <span>
              The floating{" "}
              <Link href="https://flight-manual.atom.io/getting-started/sections/atom-basics/#opening-a-file-in-a-project">
                fuzzy finder
              </Link>{" "}
              modal.
            </span>
          </Image>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image
            alt="Screenshot showing basic UI components of the settings views."
            dropShadow
            fluid={assets.images["settings-components.png"]}
            rounded
          >
            <span>Basic UI components of the settings views.</span>
          </Image>
        </Visualization>
        <Text>
          <Subline>
            Sane styles for basic UI components used in Atom&apos;s core panels and panes like the{" "}
            <Link href="https://flight-manual.atom.io/getting-started/sections/atom-basics/#settings-and-preferences">
              settings view
            </Link>
            .
          </Subline>
        </Text>
      </FeatureDuo>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Subline>Elegant floating modals wth a big font type and unobtrusive notifications.</Subline>
        </Text>
        <Visualization>
          <Video
            dropShadow
            loop
            poster={assets.videoPosters["floating-modals-and-notifications.mp4.png"]}
            rounded
            sources={[assets.videos["floating-modals-and-notifications.mp4"]]}
          >
            <span>Floating modals and notifications.</span>
          </Video>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Video
            dropShadow
            loop
            poster={assets.videoPosters["tabs-save-state-indicator.mp4.png"]}
            rounded
            sources={[assets.videos["tabs-save-state-indicator.mp4"]]}
          >
            <span>Tab highlighting and save state indicators.</span>
          </Video>
        </Visualization>
        <Text>
          <Subline>Active and inactive tab highlighting with well recognizable save state indicators.</Subline>
        </Text>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

SectionUIElements.propTypes = usePortsAssetsPropTypes;

export default SectionUIElements;
