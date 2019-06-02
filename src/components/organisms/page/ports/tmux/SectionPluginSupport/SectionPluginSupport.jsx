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
import { ROUTE_PORTS_TMUX } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image } from "atoms/core/mdx-elements";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_TMUX, 3);

/**
 * The component that represents the plugin support section for the landing page of the "Nord tmux" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.16.0
 */
const SectionPluginSupport = ({ assets }) => (
  <Section id={SECTION_ID} variant="secondary">
    <Content centered>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Headline>Take your favorite plugins with you.</Headline>
          <Subline>
            The theme supports many popular plugins for a fluid and unobtrusive user interface transition.
          </Subline>
        </Text>
        <Visualization>
          <Image
            alt="Screenshot showing UI support for the tmux-prefix-highlight plugin"
            dropShadow
            fluid={assets.images["plugins-tmux-prefix-highlight.png"]}
            rounded
          >
            <span>
              UI support for the{" "}
              <Link href="https://github.com/tmux-plugins/tmux-prefix-highlight">tmux-prefix-highlight</Link> plugin.
            </span>
          </Image>
        </Visualization>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

SectionPluginSupport.propTypes = usePortsAssetsPropTypes;

export default SectionPluginSupport;
