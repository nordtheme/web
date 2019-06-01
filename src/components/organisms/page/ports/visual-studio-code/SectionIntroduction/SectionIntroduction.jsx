/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";

import { Content } from "containers/core/Section";
import FeatureDuo, { Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_PORTS_VISUAL_STUDIO_CODE } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image } from "atoms/core/mdx-elements";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_VISUAL_STUDIO_CODE, 1);

/**
 * The component that represents the introduction section for the landing page of the
 * "Nord Visual Studio Code" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.15.0
 */
const SectionIntroduction = ({ assets }) => (
  <Section id={SECTION_ID} variant="secondary">
    <Content centered>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Headline>Your IDE. Your style.</Headline>
          <Subline>
            The unified UI and editor syntax element design provides a clutter-free and fluidly merging appearance.
          </Subline>
        </Text>
        <Visualization>
          <Image
            alt="Screenshot showing the code editor in combination with UI elements like the sidebar and minimap"
            dropShadow
            fluid={assets.images["ui-overview-go.png"]}
            rounded
          >
            <span>Syntax highlighting in the editor in combination with UI elements like the sidebar and minimap.</span>
          </Image>
        </Visualization>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

SectionIntroduction.propTypes = usePortsAssetsPropTypes;

export default SectionIntroduction;
