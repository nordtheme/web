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
import { ReactComponent as Nordify } from "assets/images/illustrations/nordify.svg";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_PORTS, ROUTE_ROOT } from "config/routes/mappings";
import { sectionIdFor } from "utils";

import { Section } from "../shared";
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
const SectionPorts = () => (
  <Section bgColor={darkenedThemeModeBackgroundbackgroundColor} gapWidth={2} id={SECTION_ID} variant="primary">
    <Content centered>
      <FeatureDuo verticalOnly>
        <Text verticalOnly>
          <Headline large>Nordify your digital home.</Headline>
          <Subline>
            Choose from many port projects to unify the style of your favorite applications and platforms.
          </Subline>
          <Actions>
            <Button ghost outlined quiet to={ROUTE_PORTS} variant="primary">
              Learn more
            </Button>
          </Actions>
        </Text>
        <Visualization>
          <Nordify />
        </Visualization>
      </FeatureDuo>
    </Content>
    <WavyLineDivider />
  </Section>
);

export default SectionPorts;
