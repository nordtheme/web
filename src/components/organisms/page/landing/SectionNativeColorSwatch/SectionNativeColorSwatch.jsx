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
import { ReactComponent as ColorSwatches } from "assets/images/illustrations/color-swatches.svg";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_DOCS, ROUTE_ROOT } from "config/routes/mappings";
import { sectionIdFor } from "utils";

import { Section } from "../shared";
import { darkenedThemeModeBackgroundbackgroundColor } from "../shared/styles";
import { DecorationCanvas, SketchTools, VectorDesignCollage, WaveDivider } from "./styled";

const SECTION_ID = sectionIdFor(ROUTE_ROOT, 4);

/**
 * The component that represents the native color swatch section of the landing page.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.6.0
 */
const SectionNativeColorSwatch = () => (
  <Section bgColor={darkenedThemeModeBackgroundbackgroundColor} gapWidth={2} id={SECTION_ID} variant="primary">
    <DecorationCanvas>
      <SketchTools />
      <VectorDesignCollage />
    </DecorationCanvas>
    <Content centered>
      <FeatureDuo>
        <Text>
          <Headline>All colors right in your toolbox.</Headline>
          <Subline>
            Nord is available in various native color swatch formats to be easily installed into your favorite
            applications.
          </Subline>
          <Actions>
            <Button ghost outlined quiet to={ROUTE_DOCS} variant="primary">
              Learn more
            </Button>
          </Actions>
        </Text>
        <Visualization>
          <ColorSwatches />
        </Visualization>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

export default SectionNativeColorSwatch;
