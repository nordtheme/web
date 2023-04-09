/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import Button from "atoms/core/Button";
import Link from "atoms/core/Link";
import { Content } from "containers/core/Section";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_DOCS_PORTS_VIM_CONFIGURATION, ROUTE_PORTS_VIM } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image } from "atoms/core/mdx-elements";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_VIM, 5);

/**
 * The component that represents the theme configuration section for the landing page of the "Nord Vim" port project.
 * @since 0.13.0
 */
const SectionConfigurations = ({ assets }) => (
  <Section id={SECTION_ID} variant="secondary">
    <Content centered>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Headline>Configure it to fit your needs.</Headline>
          <Subline>
            Theme configurations like{" "}
            <Link to={`${ROUTE_DOCS_PORTS_VIM_CONFIGURATION}#uniform-diff-background`}>
              uniform <em>diff</em> backgrounds
            </Link>{" "}
            or <Link to={`${ROUTE_DOCS_PORTS_VIM_CONFIGURATION}#bold-vertical-split-lines`}>bold vertical split lines</Link> allow to customize the theme to
            match your personal preferences.
          </Subline>
          <Actions>
            <Button ghost href={ROUTE_DOCS_PORTS_VIM_CONFIGURATION} outlined quiet variant="primary">
              Learn More
            </Button>
          </Actions>
        </Text>
        <Visualization>
          <Image
            alt="Screenshot showing Vim's diff mode with enabled uniform diff background configuration"
            dropShadow
            fluid={assets.images["config-uniform-diff-background-enabled.png"]}
            rounded
          >
            <span>
              Vims <em>diff</em> mode with enabled{" "}
              <Link to={`${ROUTE_DOCS_PORTS_VIM_CONFIGURATION}#uniform-diff-background`}>
                uniform <em>diff</em> background
              </Link>{" "}
              configuration.
            </span>
          </Image>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text />
        <Visualization>
          <Image
            alt="Screenshot showing the default highlighting for Vim's diff mode"
            dropShadow
            fluid={assets.images["config-uniform-diff-background-disabled.png"]}
            rounded
          >
            <span>
              Default highlighting for Vims <em>diff</em> mode.
            </span>
          </Image>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image
            alt="Screenshot showing the default style for split lines"
            dropShadow
            fluid={assets.images["config-bold-vertical-split-lines-disabled.png"]}
            rounded
          >
            <span>
              Default <em>split line</em> style for a lightweight and uncluttered style.
            </span>
          </Image>
        </Visualization>
        <Text>
          <Subline>
            Adjust UI elements like <Link to={`${ROUTE_DOCS_PORTS_VIM_CONFIGURATION}#bold-vertical-split-lines`}>split lines</Link> to adjust Vims overall
            appearance.
          </Subline>
        </Text>
      </FeatureDuo>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text />
        <Visualization>
          <Image
            alt="Screenshot showing the style for the enabled bold split line configuration"
            dropShadow
            fluid={assets.images["config-bold-vertical-split-lines-enabled.png"]}
            rounded
          >
            <span>
              Enabled <Link to={`${ROUTE_DOCS_PORTS_VIM_CONFIGURATION}#bold-vertical-split-lines`}>bold split lines</Link> configuration.
            </span>
          </Image>
        </Visualization>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

SectionConfigurations.propTypes = usePortsAssetsPropTypes;

export default SectionConfigurations;
