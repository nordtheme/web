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
import Link from "atoms/core/Link";
import { Content } from "containers/core/Section";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_DOCS_PORTS_EMACS_CONFIGURATION, ROUTE_PORTS_EMACS } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image, Video } from "atoms/core/mdx-elements";
import { Code } from "atoms/core/html-elements";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_EMACS, 4);

/**
 * The component that represents the theme configuration section for the landing page of the "Nord Emacs" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.17.0
 */
const SectionConfigurations = ({ assets }) => (
  <Section id={SECTION_ID}>
    <Content centered>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image
            alt="Screenshot showing selection in the editor with enabled frost region highlight style configuration"
            dropShadow
            fluid={assets.images["editor-config-selection-highlight-frost.png"]}
            rounded
          >
            <span>
              Selection in the editor with enabled <Code>frost</Code>{" "}
              <Link to={`${ROUTE_DOCS_PORTS_EMACS_CONFIGURATION}#region-highlight-style`}>region highlight style</Link>{" "}
              configuration.
            </span>
          </Image>
        </Visualization>
        <Text>
          <Headline>Configure it to fit your needs.</Headline>
          <Subline>
            Theme configurations like different{" "}
            <Link to={`${ROUTE_DOCS_PORTS_EMACS_CONFIGURATION}#region-highlight-style`}>region highlight styles</Link>{" "}
            or <Link to={`${ROUTE_DOCS_PORTS_EMACS_CONFIGURATION}#uniform-mode-lines`}>uniform mode lines</Link> allow
            to customize the theme to match your personal preferences.
          </Subline>
          <Actions>
            <Button ghost href={ROUTE_DOCS_PORTS_EMACS_CONFIGURATION} outlined quiet variant="primary">
              Learn More
            </Button>
          </Actions>
        </Text>
      </FeatureDuo>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text />
        <Visualization>
          <Image
            alt="Screenshot showing selection in the editor with enabled snowstorm region highlight style configuration"
            dropShadow
            fluid={assets.images["editor-config-selection-highlight-snowstorm.png"]}
            rounded
          >
            <span>
              Selection in the editor with enabled <Code>snowstorm</Code>{" "}
              <Link to={`${ROUTE_DOCS_PORTS_EMACS_CONFIGURATION}#region-highlight-style`}>region highlight style</Link>{" "}
              configuration.
            </span>
          </Image>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Video
            dropShadow
            loop
            poster={assets.videoPosters["editor-selection-highlight.mp4.png"]}
            rounded
            sources={[assets.videos["editor-selection-highlight.mp4"]]}
          >
            <span>Default editor code selection highlighting.</span>
          </Video>
        </Visualization>
        <Text>
          <Subline>Sane styles when running without custom configurations.</Subline>
        </Text>
      </FeatureDuo>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Subline>
            Customize UI elements like{" "}
            <Link to={`${ROUTE_DOCS_PORTS_EMACS_CONFIGURATION}#uniform-mode-lines`}>uniform mode lines</Link> to adjust
            Emacs overall appearance.
          </Subline>
        </Text>
        <Visualization>
          <Image
            alt="Screenshot showing Emacs with enabled uniform mode lines style configuration"
            dropShadow
            fluid={assets.images["ui-config-uniform-mode-lines-enabled.png"]}
            rounded
          >
            <span>
              Emacs with enabled <em>uniform mode lines</em> style configuration
            </span>
          </Image>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image
            alt="Screenshot showing Emacs with default mode lines styles"
            dropShadow
            fluid={assets.images["ui-config-uniform-mode-lines-disabled.png"]}
            rounded
          >
            <span>Default mode lines style.</span>
          </Image>
        </Visualization>
        <Text />
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

SectionConfigurations.propTypes = usePortsAssetsPropTypes;

export default SectionConfigurations;
