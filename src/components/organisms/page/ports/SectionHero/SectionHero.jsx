/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";

import PortProjectsWindow, { useFloatingLogos } from "atoms/core/vectors/decorations/PortProjectsWindow";
import { ROUTE_PORTS } from "config/routes/mappings";
import Section, { Content } from "containers/core/Section";
import FeatureDuo, { Headline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { sectionIdFor } from "utils";

import WaveDivider from "./styled/WaveDivider";
import Subline from "../shared/Subline";

const SECTION_ID = sectionIdFor(ROUTE_PORTS, 0);

/**
 * The component that represents the hero section of the ports page.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
export default function SectionHero(props) {
  const { transformLogoLayer, calcFloatingLogos } = useFloatingLogos();

  return (
    <Section
      decorated
      id={SECTION_ID}
      onMouseMove={({ clientX: x, clientY: y }) => calcFloatingLogos(x, y)}
      variant="primary"
      {...props}
    >
      <WaveDivider />
      <Content centered decorated>
        <FeatureDuo verticalOnly>
          <Text verticalOnly>
            <Headline large>Nordify your digital home</Headline>
            <Subline>
              Unify the appearance and usage experience for your favorite applications &mdash; from code editors, shell
              terminals to modern UIs and libraries.
            </Subline>
            <Subline>
              Nord supports a broad and constantly growing spectrum that allows to customize your daily tool stack.
            </Subline>
          </Text>
          <Visualization>
            <PortProjectsWindow logoLayerTransformer={transformLogoLayer} />
          </Visualization>
        </FeatureDuo>
      </Content>
    </Section>
  );
}
