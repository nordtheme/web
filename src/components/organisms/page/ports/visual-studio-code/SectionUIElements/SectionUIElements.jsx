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
import { ROUTE_PORTS_VISUAL_STUDIO_CODE } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image } from "atoms/core/mdx-elements";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_VISUAL_STUDIO_CODE, 4);

/**
 * The component that represents the UI elements section for the landing page of the
 * "Nord Visual Studio Code" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.15.0
 */
const SectionUIElements = ({ assets }) => (
  <Section id={SECTION_ID}>
    <Content centered>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Headline>Uniform design with beautiful UI elements.</Headline>
          <Subline>
            The themed UI elements provide a fluid and unobtrusive transition from the code editor to the IDE.
          </Subline>
        </Text>
        <Visualization>
          <Image
            alt="Screenshot showing UI elements for the debug view"
            dropShadow
            fluid={assets.images["ui-debug.png"]}
            rounded
          >
            <span>
              UI elements for the <Link href="https://code.visualstudio.com/docs/editor/debugging">debug</Link> view.
            </span>
          </Image>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image
            alt="Screenshot showing the active and inactive explorer sidebar with mouse and keyboard focused items"
            dropShadow
            fluid={assets.images["ui-sidebar-focus.png"]}
            rounded
          >
            <span>Active and inactive sidebar with mouse and keyboard focused items.</span>
          </Image>
        </Visualization>
        <Text>
          <Subline>
            Sane styles for basic{" "}
            <Link href="https://code.visualstudio.com/docs/getstarted/userinterface">workbench UI elements</Link> like
            the tree view of the explorer in the sidebar.
          </Subline>
        </Text>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

SectionUIElements.propTypes = usePortsAssetsPropTypes;

export default SectionUIElements;
