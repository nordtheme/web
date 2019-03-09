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
import Button from "atoms/core/Button";
import ColorPaletteCard from "atoms/core/ColorPaletteCard";
import { Code } from "atoms/core/html-elements";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_DOCS, ROUTE_ROOT } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { palettes } from "styles/theme";

import { DecorationCanvas, Section } from "../../shared";
import { ColorPaletteWrapper } from "../shared";
import { NordicBackpack, NordicCompass, MapPathMarker, WaveDivider } from "./styled";

const SECTION_ID = sectionIdFor(ROUTE_ROOT, 1);

/**
 * The component that represents the color palette modularity section of the landing page.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.6.0
 */
const SectionPalettesModularity = () => (
  <Section id={SECTION_ID} variant="secondary">
    <DecorationCanvas>
      <MapPathMarker />
      <NordicCompass />
      <NordicBackpack />
    </DecorationCanvas>
    <Content centered>
      <FeatureDuo>
        <Visualization reverseRowOrder>
          <ColorPaletteWrapper>
            <ColorPaletteCard colors={Object.values(palettes.POLAR_NIGHT)} floatingTitle="Polar Night" />
            <ColorPaletteCard colors={Object.values(palettes.SNOW_STORM)} floatingTitle="Snow Storm" />
          </ColorPaletteWrapper>
        </Visualization>
        <Text>
          <Headline>Modular structure.</Headline>
          <Subline>
            Nord colors are numbered from <Code>nord0</Code> to <Code>nord15</Code> where each component contains a
            different amount of colors.
          </Subline>
          <Actions>
            <Button ghost outlined quiet to={ROUTE_DOCS} variant="primary">
              Learn more
            </Button>
          </Actions>
        </Text>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

export default SectionPalettesModularity;
