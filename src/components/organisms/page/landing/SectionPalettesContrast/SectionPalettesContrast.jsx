/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { ThemeProvider } from "styled-components";

import { Content } from "containers/core/Section";
import Button from "atoms/core/Button";
import ColorPaletteCard from "atoms/core/ColorPaletteCard";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_DOCS, ROUTE_ROOT } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { colors, palettes, themedMode, THEME_KEY_MODE, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

import { DecorationCanvas, Section } from "../../shared";
import { ColorPaletteWrapper } from "../shared";
import { GleamingFrostWind, WaveDivider } from "./styled";

const SECTION_ID = sectionIdFor(ROUTE_ROOT, 2);

const pinnedThemeMode = { [THEME_KEY_MODE]: MODE_DARK_NIGHT_FROST };

const pinnedThemeBackgroundColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.background.base[MODE_DARK_NIGHT_FROST],
  [MODE_DARK_NIGHT_FROST]: colors.background.base[MODE_DARK_NIGHT_FROST],
});

/**
 * The component that represents the color palette contrast section of the landing page.
 * @since 0.6.0
 */
const SectionPalettesContrast = () => (
  <Section bgColor={pinnedThemeBackgroundColor} gapWidth={1} id={SECTION_ID}>
    <DecorationCanvas>
      <GleamingFrostWind />
    </DecorationCanvas>
    <ThemeProvider theme={pinnedThemeMode}>
      <Content centered>
        <FeatureDuo>
          <Visualization>
            <ColorPaletteWrapper reverseOffset>
              <ColorPaletteCard colors={Object.values(palettes.FROST)} floatingTitle="Frost" />
              <ColorPaletteCard colors={Object.values(palettes.AURORA)} floatingTitle="Aurora" />
            </ColorPaletteWrapper>
          </Visualization>
          <Text>
            <Headline>Beautiful and harmonic color contrasts.</Headline>
            <Subline>
              Inspired by the beauty of the arctic, the colors reflect the cold, yet harmonious world of ice and the colorfulness of the Aurora Borealis.
            </Subline>
            <Actions>
              <Button ghost outlined quiet to={ROUTE_DOCS} variant="primary">
                Learn more
              </Button>
            </Actions>
          </Text>
        </FeatureDuo>
      </Content>
    </ThemeProvider>
    <WaveDivider />
  </Section>
);

export default SectionPalettesContrast;
