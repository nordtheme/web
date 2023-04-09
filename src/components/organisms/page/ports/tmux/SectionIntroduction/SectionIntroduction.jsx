/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import Link from "atoms/core/Link";
import { Content } from "containers/core/Section";
import FeatureDuo, { Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_PORTS_TMUX, ROUTE_PORTS_VIM } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image } from "atoms/core/mdx-elements";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_TMUX, 1);

/**
 * The component that represents the introduction section for the landing page of the "Nord tmux" port project.
 * @since 0.16.0
 */
const SectionIntroduction = ({ assets }) => (
  <Section id={SECTION_ID} variant="secondary">
    <Content centered>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Headline>Your terminal. Your style.</Headline>
          <Subline>The unified UI element design provides a clutter-free and fluidly merging appearance.</Subline>
        </Text>
        <Visualization>
          <Image
            alt="Screenshot showing a fluidly merged UI of tmux and the Nord Vim theme with a Go function."
            dropShadow
            fluid={assets.images["ui-fluid-appearance-vim.png"]}
            rounded
          >
            <span>
              Fluidly merged UI of tmux and the <Link to={ROUTE_PORTS_VIM}>Nord Vim</Link> theme with a <Link href="https://golang.org">Go</Link> function.
            </span>
          </Image>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image alt="Screenshot showing a fluidly merged UI of tmux with gotop." dropShadow fluid={assets.images["ui-fluid-appearance-gotop.png"]} rounded>
            <span>
              Fluidly merged UI of tmux with <Link href="https://github.com/cjbassi/gotop">gotop</Link>.
            </span>
          </Image>
        </Visualization>
        <Text>
          <Subline>
            Fits to many popular terminal based applications like <Link href="https://github.com/cjbassi/gotop">gotop</Link> …
          </Subline>
        </Text>
      </FeatureDuo>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Subline>
            …or <Link href="https://hisham.hm/htop">htop</Link>.
          </Subline>
        </Text>
        <Visualization>
          <Image alt="Screenshot showing a fluidly merged UI of tmux with htop." dropShadow fluid={assets.images["ui-fluid-appearance-htop.png"]} rounded>
            <span>
              Fluidly merged UI of tmux with <Link href="https://hisham.hm/htop">htop</Link>.
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
