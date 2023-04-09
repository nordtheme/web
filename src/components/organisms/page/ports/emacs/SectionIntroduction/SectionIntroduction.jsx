/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import Link from "atoms/core/Link";
import { Content } from "containers/core/Section";
import FeatureDuo, { Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_PORTS_EMACS } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image } from "atoms/core/mdx-elements";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_EMACS, 1);

/**
 * The component that represents the introduction section for the landing page of the "Nord Emacs" port project.
 * @since 0.17.0
 */
const SectionIntroduction = ({ assets }) => (
  <Section id={SECTION_ID} variant="secondary">
    <Content centered>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Headline>Your editor. Your style.</Headline>
          <Subline>The unified UI and editor syntax element design provides a clutter-free and fluidly merging appearance.</Subline>
        </Text>
        <Visualization>
          <Image
            alt="Screenshot showing the Go syntax highlighting and the opened emacs-neotree package."
            dropShadow
            fluid={assets.images["overview-go-neotree.png"]}
            rounded
          >
            <span>
              Go syntax highlighting and the opened <Link href="https://github.com/jaypei/emacs-neotree">emacs-neotree</Link> package.
            </span>
          </Image>
        </Visualization>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

SectionIntroduction.propTypes = usePortsAssetsPropTypes;

export default SectionIntroduction;
