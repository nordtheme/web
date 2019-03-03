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
import { Content } from "containers/core/Section";
import PortProjectsWindow, { useFloatingLogos } from "atoms/core/vectors/decorations/PortProjectsWindow";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_PORTS, ROUTE_ROOT } from "config/routes/mappings";
import { sectionIdFor } from "utils";

import { Section } from "../../shared";
import { darkenedThemeModeBackgroundbackgroundColor } from "../shared/styles";
import WavyLineDivider from "./styled/WavyLineDivider";

const SECTION_ID = sectionIdFor(ROUTE_ROOT, 3);

/**
 * The component that represents the port project section of the landing page.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.6.0
 */
export default function SectionPorts(props) {
  const { transformLogoLayer, calcFloatingLogos } = useFloatingLogos();

  return (
    <Section
      bgColor={darkenedThemeModeBackgroundbackgroundColor}
      gapWidth={2}
      id={SECTION_ID}
      onMouseMove={({ clientX: x, clientY: y }) => calcFloatingLogos(x, y)}
      variant="primary"
      {...props}
    >
      <Content centered>
        <FeatureDuo verticalOnly>
          <Text verticalOnly>
            <Headline large>Nordify your digital home.</Headline>
            <Subline>
              Choose from a broad and constantly growing spectrum of port projects to unify the appearance of your
              favorite applications.
            </Subline>
            <Actions>
              <Button ghost outlined quiet to={ROUTE_PORTS} variant="primary">
                Learn more
              </Button>
            </Actions>
          </Text>
          <Visualization>
            <PortProjectsWindow logoLayerTransformer={transformLogoLayer} />
          </Visualization>
        </FeatureDuo>
      </Content>
      <WavyLineDivider />
    </Section>
  );
}
