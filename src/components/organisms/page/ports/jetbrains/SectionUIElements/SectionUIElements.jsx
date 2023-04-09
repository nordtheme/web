/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import Link from "atoms/core/Link";
import { Content } from "containers/core/Section";
import FeatureDuo, { Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_PORTS_JETBRAINS } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image } from "atoms/core/mdx-elements";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_JETBRAINS, 4);

/**
 * The component that represents the UI elements section for the landing page of the "Nord JetBrains" port project.
 * @since 0.12.0
 */
const SectionUIElements = ({ assets }) => (
  <Section id={SECTION_ID}>
    <Content centered>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Headline>Uniform design with beautiful UI elements.</Headline>
          <Subline>The themed UI elements provide a fluid and unobtrusive transition from the code editor to the IDE.</Subline>
        </Text>
        <Visualization>
          <Image alt="Screenshot showing the customized IDE welcome screen" dropShadow fluid={assets.images["ui-welcome-screen.png"]} rounded>
            <span>The customized IDE welcome screen.</span>
          </Image>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image alt="Screenshot showing the Search Everywhere popup" dropShadow fluid={assets.images["ui-search-everywhere.png"]} rounded>
            <span>
              The <i>Search Everywhere</i> popup.
            </span>
          </Image>
        </Visualization>
        <Text>
          <Subline>
            Support for special elements like the <i>Search Everywhere</i> popup and menus.
          </Subline>
        </Text>
      </FeatureDuo>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text />
        <Visualization>
          <Image alt="Screenshot showing multiple progress bars with different layouts" dropShadow fluid={assets.images["ui-test-progress-bars.png"]} rounded>
            <span>Multiple progress bars with different layouts.</span>
          </Image>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image alt="Screenshot showing various common UI components" dropShadow fluid={assets.images["ui-test-components.png"]} rounded>
            <span>Common UI components.</span>
          </Image>
        </Visualization>
        <Text />
      </FeatureDuo>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <span>Styled context menus on supported operating systems.</span>
        </Text>
        <Visualization>
          <Image alt="Screenshot showing a styled context" dropShadow fillSize={60} fluid={assets.images["ui-context-menu.png"]} rounded />
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image alt="Screenshot showing the import wizard for Gradle based projects" dropShadow fluid={assets.images["ui-import-wizard-gradle.png"]} rounded>
            <span>
              Import wizard for <Link href="https://gradle.org">Gradle</Link> based projects.
            </span>
          </Image>
        </Visualization>
        <Text>
          <span>Support for various IDE specific views like the project import wizard.</span>
        </Text>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

SectionUIElements.propTypes = usePortsAssetsPropTypes;

export default SectionUIElements;
