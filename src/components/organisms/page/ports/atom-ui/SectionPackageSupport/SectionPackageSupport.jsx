/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import Link from "atoms/core/Link";
import { Content } from "containers/core/Section";
import FeatureDuo, { Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_PORTS_ATOM_UI } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image } from "atoms/core/mdx-elements";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_ATOM_UI, 3);

/**
 * The component that represents the packages support section for the landing page of the "Nord VAtom UI" port project.
 * @since 0.19.0
 */
const SectionPackageSupport = ({ assets }) => (
  <Section id={SECTION_ID} variant="secondary">
    <Content centered>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Headline>Take your favorite packages with you.</Headline>
          <Subline>The theme supports many popular UI packages for fluid and unobtrusive user interface transitions.</Subline>
        </Text>
        <Visualization>
          <Image
            alt="Screenshot showing a React JSX component with the minimap package to keep an overall overview of the whole file"
            dropShadow
            fluid={assets.images["package-support-minimap.png"]}
            rounded
          >
            <span>
              A <Link href="https://reactjs.org">React</Link> JSX component with the the <Link href="https://atom.io/packages/minimap">minimap</Link> package to
              keep an overall overview of the whole file.
            </span>
          </Image>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image
            alt="Screenshot showing the tool-bar package for a minimal style for common views and tasks"
            dropShadow
            fluid={assets.images["package-support-tool-bar.png"]}
            rounded
          >
            <span>
              The <Link href="https://atom.io/packages/tool-bar">tool-bar</Link> package for a minimal style for common views and tasks.
            </span>
          </Image>
        </Visualization>
        <Text>
          <Subline>
            Packages like <Link href="https://atom.io/packages/tool-bar">tool-bar</Link> allow to achieve a minimal style for quick access to common views and
            tasks.
          </Subline>
        </Text>
      </FeatureDuo>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text />
        <Visualization>
          <Image alt="Screenshot showing the card view of the expose package" dropShadow fluid={assets.images["package-support-expose.png"]} rounded>
            <span>
              The card view of the <Link href="https://atom.io/packages/expose">expose</Link> package.
            </span>
          </Image>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image
            alt="Screenshot showing the color-picker package with adjusted styles"
            dropShadow
            fluid={assets.images["package-support-color-picker.png"]}
            rounded
          >
            <span>
              The <Link href="https://atom.io/packages/color-picker">color-picker</Link> package with adjusted styles.
            </span>
          </Image>
        </Visualization>
        <Text>
          <Subline>
            Smooth integration of floating UI components like the <Link href="https://atom.io/packages/color-picker">color-picker</Link> package.
          </Subline>
        </Text>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

SectionPackageSupport.propTypes = usePortsAssetsPropTypes;

export default SectionPackageSupport;
