/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
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

const SECTION_ID = sectionIdFor(ROUTE_PORTS_VIM, 4);

/**
 * The component that represents the plugin support section for the landing page of the "Nord Vim" port project.
 * @since 0.13.0
 */
const SectionPluginSupport = ({ assets }) => (
  <Section id={SECTION_ID}>
    <Content centered>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Headline>Take your favorite plugins with you.</Headline>
          <Subline>The theme supports many popular UI and syntax plugins for great highlighting and fluid and unobtrusive user interface transition.</Subline>
        </Text>
        <Visualization>
          <Image
            alt="Screenshot showing a Go function with the sign column of the vim-gitgutter plugin"
            dropShadow
            fluid={assets.images["plugins-ui-vim-gitgutter.png"]}
            rounded
          >
            <span>
              Vims sign column with enabled <Link href="https://github.com/airblade/vim-gitgutter">vim-gitgutter</Link> plugin.
            </span>
          </Image>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image
            alt="Screenshot showing the different states of the lightline.vim plugin with custom elements and separators"
            dropShadow
            fluid={assets.images["plugins-ui-lightline-custom.png"]}
            rounded
          >
            <span>
              <Link href="https://github.com/itchyny/lightline.vim">lightline.vim</Link> with custom elements and separators.
            </span>
          </Image>
        </Visualization>
        <Text>
          <Subline>
            Nord comes bundled with themes for <Link href="https://github.com/itchyny/lightline.vim">lightline.vim</Link> and{" "}
            <Link href="https://github.com/vim-airline/vim-airline">vim-airline</Link>.
          </Subline>
        </Text>
      </FeatureDuo>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text />
        <Visualization>
          <Image
            alt="Screenshot showing the different states of the lightline.vim plugin with default styles"
            dropShadow
            fluid={assets.images["plugins-ui-lightline-default.png"]}
            rounded
          >
            <span>
              <Link href="https://github.com/itchyny/lightline.vim">lightline.vim</Link> with default styles.
            </span>
          </Image>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image
            alt="Screenshot showing a Go function highlighted through the vim-go syntax plugin"
            dropShadow
            fluid={assets.images["plugins-syntax-vim-go.png"]}
            rounded
          >
            <span>
              Go function highlighted through <Link href="https://github.com/fatih/vim-go">vim-go</Link>.
            </span>
          </Image>
        </Visualization>
        <Text>
          <Subline>
            Beautiful syntax highlighting with support for <Link href="https://github.com/fatih/vim-go">vim-go</Link> and{" "}
            <Link href="https://github.com/vim-airline/vim-airline">vim-airline</Link>.
          </Subline>
        </Text>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

SectionPluginSupport.propTypes = usePortsAssetsPropTypes;

export default SectionPluginSupport;
