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
import { ROUTE_PORTS_VIM } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image } from "atoms/core/mdx-elements";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_VIM, 1);

/**
 * The component that represents the introduction section for the landing page of the "Nord Vim" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.13.0
 */
const SectionIntroduction = ({ assets }) => (
  <Section id={SECTION_ID} variant="secondary">
    <Content centered>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Headline>Your IDE. Your style.</Headline>
          <Subline>
            The unified UI and editor syntax element design provides a clutter-free and fluidly merging appearance.
          </Subline>
        </Text>
        <Visualization>
          <Image
            alt="Screenshot showing the syntax highlighting through vim-go and the opened NERDTree plugin."
            dropShadow
            fluid={assets.images["overview-go-nerdtree.png"]}
            rounded
          >
            <span>
              Syntax highlighting through <Link href="https://github.com/fatih/vim-go">vim-go</Link> and the opened{" "}
              <Link href="https://github.com/scrooloose/nerdtree">NERDTree</Link> plugin.
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
